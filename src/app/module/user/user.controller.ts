import { Request, Response } from 'express';
import { catchAsync } from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { UserService } from './user.service';

const createStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createStudent(req);
  sendResponse(res, result);
});

const createFaculty = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createFaculty(req);
  sendResponse(res, result);
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createAdmin(req);
  sendResponse(res, result);
});

export const UserController = {
  createAdmin,
  createFaculty,
  createStudent
};
