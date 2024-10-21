import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { AcademicDepartmentService } from './academicDepartment.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getAllFromDB(req);
  sendResponse(res, result);
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.getByIdFromDB(req);
  sendResponse(res, result);
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.updateOneInDB(req);
  sendResponse(res, result);
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicDepartmentService.deleteByIdFromDB(req);
  sendResponse(res, result);
});

export const AcademicDepartmentController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
