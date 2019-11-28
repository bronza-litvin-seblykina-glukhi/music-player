import {MigrationInterface, QueryRunner} from 'typeorm';

export class AddTestUsers1574945886412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO userAccount(id, firstName, lastName, login, password, role, email, paidSubscription) VALUES (1, 'TestAdminName', 'TestAdminSurname', 'test_admin', 'b227cbd22eaa96019ebfc4aff35ad2add2a47439', 'admin', 'test.admin@gmail.com', true)`);
        await queryRunner.query(`INSERT INTO userAccount(id, firstName, lastName, login, password, role, email, paidSubscription) VALUES (2, 'TestClientName', 'TestClientSurname', 'test_client', '69bf83b695f0a0b7f60b4f9d5cfa5926edb19c9e', 'client', 'test.client@gmail.com', true)`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
    }

}
