import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { CourseService } from './course.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.getAllFromDB(req);
  sendResponse(res, result);
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.getByIdFromDB(req);
  sendResponse(res, result);
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.updateOneInDB(req);
  sendResponse(res, result);
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.deleteByIdFromDB(req);
  sendResponse(res, result);
});

const assignFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.assignFaculty(req);
  sendResponse(res, result);
});

const removeFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseService.removeAssignFaculty(req);
  sendResponse(res, result);
});

export const CourseController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  assignFaculty,
  removeFaculty
};
