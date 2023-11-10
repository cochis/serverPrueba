"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleSchema = void 0;
const mongoose_1 = require("mongoose");
exports.roleSchema = new mongoose_1.Schema({
    name: { type: String, unique: true, uppercase: true },
    permissions: { type: [mongoose_1.Types.ObjectId], ref: 'Permission' }
});
//# sourceMappingURL=role.schema.js.map