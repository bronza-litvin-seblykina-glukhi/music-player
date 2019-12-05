import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import * as md5 from 'md5';

import {AuthInterface} from '../interfaces/auth.interface';
import {RegisterInterface} from '../interfaces/register.interface';

// ENTITIES
import {UserAccountEntity} from '../entities/user-account.entity';
import {AccessTokenEntity} from '../entities/access-token.entity';
import {NewSongInterface} from '../../audio-files/interfaces/new-song.interface';

@Injectable()
export class RepositoryLayer {

    constructor(
        @InjectRepository(UserAccountEntity) private readonly userAccountEntity: Repository<UserAccountEntity>,
        @InjectRepository(AccessTokenEntity) private readonly accessTokenEntity: Repository<AccessTokenEntity>
    ) {
    }

    public async getUserAccountId(userToken: string): Promise<void | number> {
        return await this.accessTokenEntity.findOne({
            where: {token: userToken},
            join: {
                alias: 'userAccount',
                innerJoinAndSelect: {
                    user: 'userAccount.user'
                }
            }
        })
            .then(user => {
                return user.user.id;
            });
    }

    public async authorizeUser(authData: AuthInterface) {
        const user = await this.userAccountEntity.findOne({
            where: authData
        }).catch(err => {
            return new BadRequestException(err.massage).getResponse();
        });

        return await this.accessTokenEntity.findOne({
            select: ['token'],
            where: {
                user: user
            }
        })
            .then(res => {
                if (!res) {
                    return new UnauthorizedException(
                        'Authorization error: please, check your login data and password and try again'
                    ).getResponse();
                }

                return res;
            })
            .catch(err => {
                return new BadRequestException(err.massage).getResponse();
            });
    }

    public async registerUser(registerData: RegisterInterface): Promise<any> {
        return await this.userAccountEntity.save(registerData)
            .then(async result => {
                const newAccessToken = {
                    token: md5((result.id + Date.now()).toString()),
                    user: result,
                };
                return await this.accessTokenEntity.save(newAccessToken);
            })
            .catch(err => {
                if (err.code === 'ER_DUP_ENTRY' && err.sqlMessage.indexOf(registerData.login) >= 0) {
                    return new BadRequestException(
                        `Nickname '${registerData.login}' already exists`
                    ).getResponse();
                }

                if (err.code === 'ER_DUP_ENTRY' && err.sqlMessage.indexOf(registerData.email) >= 0) {
                    return new BadRequestException(
                        `Email '${registerData.email}' already exists`
                    ).getResponse();
                }
            });
    }

    public async getUserData(userToken: string): Promise<string | object> {
        return await this.accessTokenEntity.findOne({
            where: {token: userToken},
            join: {
                alias: 'userAccount',
                innerJoinAndSelect: {
                    user: 'userAccount.user'
                }
            }
        })
            .then(res => {
                return res.user;
            })
            .catch(err => {
                return new BadRequestException(err.massage).getResponse();
            });
    }

    public async getAccessTokenByEmailAndLogin(userName: string, userEmail: string): Promise<string | object> {
        const user = await this.userAccountEntity.findOne({
            where: {email: userEmail, login: userName},
        }).catch(err => {
                return new BadRequestException(err.massage).getResponse();
            });

        return await this.accessTokenEntity.findOne({
            select: ['token'],
            where: {
                user: user
            }
        }).catch(err => {
                return new BadRequestException(err.massage).getResponse();
            });
    }
}
