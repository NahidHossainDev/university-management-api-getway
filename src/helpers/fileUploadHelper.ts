import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import * as fs from 'fs';
import multer from 'multer';
import config from '../config';
import { IUploadFile } from '../interfaces/file';

cloudinary.config({
  cloud_name: config.cloudinary.name,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.secret
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

const uploadToCloudinary = async (file: IUploadFile): Promise<UploadApiResponse | void> => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path, (error: Error, result: UploadApiResponse) => {
      fs.unlinkSync(file.path);
      if (error) reject(error);
      else resolve(result);
    });
  });
};

export const FileUploadHandler = {
  upload,
  uploadToCloudinary
};
