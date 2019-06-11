import * as express from 'express';
import * as mongoose from 'mongoose';
const bodyParser = require('body-parser');
const path = require('path');

import FileRoutes from './routes/FileRoutes';

class App {
  public app: express.Application = express();
  public fileRoutes: FileRoutes = new FileRoutes();

  private mongoSetup(): void {
    (<any>mongoose).Promise = global.Promise;
    mongoose.connect(
      'mongodb://shelajoy:shelajoy2019@ds235197.mlab.com:35197/fcc-uploadfile',
      {
        useNewUrlParser: true,
        useCreateIndex: true
      }
    );
  }
  constructor() {
    this.mongoSetup();
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(bodyParser.json());

    this.app.use(express.static(path.join(__dirname, '..', 'public')));

    this.fileRoutes.routes(this.app);
  }
}

export default new App().app;
