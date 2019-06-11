import { Request, Response } from 'express';
const path = require('path');
import File, { FileDocument } from '../models/File';

export default class FileController {
  public add = async (req: Request, res: Response) => {
    const removePath = path.join(__dirname, '..', '..', 'public');
    const relPath = req.file.path.replace(removePath, '');
    const newFile = new File({
      path: relPath,
      fileName: req.file.originalname
    });
    newFile.save((err, _file) => {
      if (err) res.send(err);
      else res.json({ ...req.file, path: relPath });
    });
  };
}
