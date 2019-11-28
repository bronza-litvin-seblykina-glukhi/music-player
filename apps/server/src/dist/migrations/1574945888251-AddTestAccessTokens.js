"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AddTestAccessTokens1574945888251 {
    async up(queryRunner) {
        await queryRunner.query(`INSERT INTO accessToken (id, token, userId) VALUES (1, '2dd2d7f5eba144f60922e3ef9d51e66b', 1)`);
        await queryRunner.query(`INSERT INTO accessToken (id, token, userId) VALUES (2, '2f3fa407169d0b5c20e49d3c054dd853', 2)`);
    }
    async down(queryRunner) {
    }
}
exports.AddTestAccessTokens1574945888251 = AddTestAccessTokens1574945888251;
//# sourceMappingURL=1574945888251-AddTestAccessTokens.js.map