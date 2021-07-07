import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddArtists1574675849013 implements MigrationInterface {
    tableName = 'artists';

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`INSERT INTO ${this.tableName} (id, artist) VALUES (1, 'Manowar')`);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`TRUNCATE TABLE ${this.tableName}`);
    }
}
