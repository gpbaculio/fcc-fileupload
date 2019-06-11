"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const path = require('path');
const FileController_1 = require("../controllers/FileController");
const upload = multer({
    dest: path.join('public/uploads', `${Date.now()}`)
});
class FileRoutes {
    constructor() {
        this.fileController = new FileController_1.default();
    }
    routes(app) {
        app
            .route('/api/fileanalyse')
            .post(upload.single('file'), this.fileController.add);
    }
}
exports.default = FileRoutes;
//# sourceMappingURL=FileRoutes.js.map