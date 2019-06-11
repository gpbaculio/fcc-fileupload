import * as mongoose from 'mongoose';

export interface FileDocument extends mongoose.Document {
  path: string;
  fileName: string;
}

const FileSchema = new mongoose.Schema(
  {
    path: {
      type: String,
      required: true
    },
    fileName: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

export default mongoose.model<FileDocument>('File', FileSchema);
