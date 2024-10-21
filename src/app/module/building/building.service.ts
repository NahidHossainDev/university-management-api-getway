import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.post('/building', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get('/building', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get(`/building/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.patch(`/building/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.delete(`/building/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

export const BuildingService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
