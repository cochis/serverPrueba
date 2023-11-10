"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    userCode: { type: Number, unique: true },
    name: { type: String },
    email: { type: String, unique: true, trim: true, lowercase: true },
    birthdate: { type: Date },
    role: { type: mongoose_1.Types.ObjectId, ref: 'Role', default: null, nullable: true },
    deleted: { type: Boolean, default: false }
});
//# sourceMappingURL=user.schema.js.map