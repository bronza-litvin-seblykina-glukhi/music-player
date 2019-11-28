"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddArtists1574675849013 {
    constructor() {
        this.tableName = 'artists';
    }
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO ${this.tableName} (id, artist) VALUES (1, 'Manowar')`);
    }
    async down(queryRunner) {
        await queryRunner.query(`TRUNCATE TABLE ${this.tableName}`);
    }
}
exports.AddArtists1574675849013 = AddArtists1574675849013;
//# sourceMappingURL=1574675849013-AddArtists.js.map