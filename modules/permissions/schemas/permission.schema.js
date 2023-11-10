"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.permissionSchema = new mongoose_1.Schema({
    name: {
        type: String,
        unique: true,
        uppercase: true
    }
});
//# sourceMappingURL=permission.schema.js.map