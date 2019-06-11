"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const path = require('path');
const FileRoutes_1 = require("./routes/FileRoutes");
class App {
    constructor() {
        this.app = express();
        this.fileRoutes = new FileRoutes_1.default();
        this.mongoSetup();
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        this.app.use(bodyParser.json());
        this.app.use(express.static(path.join(__dirname, '..', 'public')));
        this.fileRoutes.routes(this.app);
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect('mongodb://shelajoy:shelajoy2019@ds235197.mlab.com:35197/fcc-uploadfile', {
            useNewUrlParser: true,
            useCreateIndex: true
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map