import {MigrationInterface, QueryRunner} from 'typeorm';

export class AddTestAccessTokens1574945888251 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO accessToken (id, token, userId) VALUES (1, '2dd2d7f5eba144f60922e3ef9d51e66b', 1)`);
        await queryRunner.query(`INSERT INTO accessToken (id, token, userId) VALUES (2, '2f3fa407169d0b5c20e49d3c054dd853', 2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
