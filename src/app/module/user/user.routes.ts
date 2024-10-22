import { Router } from 'express';
import { FileUploadHandler } from '../../../helpers/fileUploadHelper';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';

const router = Router();

router.post(
  '/create-student',
  FileUploadHandler.upload.single('file'),
  (req, res, next) => {
    req.body = UserValidation.createStudent.parse(JSON.parse(req.body.data));
    next();
  },
  UserController.createStudent
);

router.post(
  '/create-faculty',
  FileUploadHandler.upload.single('file'),
  (req, res, next) => {
    req.body = UserValidation.createFaculty.parse(JSON.parse(req.body.data));
    next();
  },
  UserController.createFaculty
);

router.post(
  '/create-admin',
  FileUploadHandler.upload.single('file'),
  (req, res, next) => {
    req.body = UserValidation.createAdmin.parse(JSON.parse(req.body.data));
    next();
  },
  UserController.createAdmin
);

export const UserRoutes = router;
