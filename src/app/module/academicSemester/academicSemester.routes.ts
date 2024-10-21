import { Router } from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = Router();

router.post(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AcademicSemesterValidation.create),
  AcademicSemesterController.insertIntoDB
);

router.get('/', AcademicSemesterController.getAllFromDB);

router.get('/:id', AcademicSemesterController.getByIdFromDB);

router.patch(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AcademicSemesterValidation.update),
  AcademicSemesterController.updateOneInDB
);

router.delete(
  '/:id',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AcademicSemesterController.deleteByIdFromDB
);

export const AcademicSemesterRoutes = router;
