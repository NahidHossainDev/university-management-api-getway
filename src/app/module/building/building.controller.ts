import { Request, Response } from 'express';

import { catchAsync } from '../../../shared/catchAsync';
import sendResponse from '../../../shared/response';
import { BuildingService } from './building.service';

const insertIntoDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.insertIntoDB(req);
  sendResponse(res, result);
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getAllFromDB(req);
  sendResponse(res, result);
});

const getByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.getByIdFromDB(req);
  sendResponse(res, result);
});

const updateOneInDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.updateOneInDB(req);
  sendResponse(res, result);
});

const deleteByIdFromDB = catchAsync(async (req: Request, res: Response) => {
  const result = await BuildingService.deleteByIdFromDB(req);
  sendResponse(res, result);
});
export const BuildingController = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
