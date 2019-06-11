"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
const File_1 = require("../models/File");
class FileController {
    constructor() {
        this.add = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const removePath = path.join(__dirname, '..', '..', 'public');
            const relPath = req.file.path.replace(removePath, '');
            const newFile = new File_1.default({
                path: relPath,
                fileName: req.file.originalname
            });
            newFile.save((err, _file) => {
                if (err)
                    res.send(err);
                else
                    res.json(Object.assign({}, req.file, { path: relPath }));
            });
        });
    }
}
exports.default = FileController;
//# sourceMappingURL=FileController.js.map