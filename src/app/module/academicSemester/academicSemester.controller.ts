import { Request, Response } from 'express';

import { catchAsync } from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { AcademicSemesterService } from './academicSemester.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getAllFromDB(req);
  sendResponse(res, result);
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.getByIdFromDB(req);
  sendResponse(res, result);
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.updateOneInDB(req);
  sendResponse(res, result);
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicSemesterService.deleteByIdFromDB(req);
  sendResponse(res, result);
});

export const AcademicSemesterController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
