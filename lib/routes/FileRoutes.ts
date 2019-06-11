import * as multer from 'multer';
const path = require('path');

import FileController from '../controllers/FileController';

const upload = multer({
  dest: path.join('public/uploads', `${Date.now()}`)
});

export default class FileRoutes {
  public fileController: FileController = new FileController();
  public routes(app): void {
    app
      .route('/api/fileanalyse')
      .post(upload.single('file'), this.fileController.add);
  }
}
