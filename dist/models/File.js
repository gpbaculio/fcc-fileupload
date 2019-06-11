"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.default = mongoose.model('File', FileSchema);
//# sourceMappingURL=File.js.map