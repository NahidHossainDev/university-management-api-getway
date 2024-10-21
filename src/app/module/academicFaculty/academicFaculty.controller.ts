import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { AcademicFacultyService } from '../academicFaculty/academicFaculty.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getAllFromDB(req);
  sendResponse(res, result);
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.getByIdFromDB(req);
  sendResponse(res, result);
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.updateOneInDB(req);
  sendResponse(res, result);
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await AcademicFacultyService.deleteByIdFromDB(req);
  sendResponse(res, result);
});

export const AcademicFacultyController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
