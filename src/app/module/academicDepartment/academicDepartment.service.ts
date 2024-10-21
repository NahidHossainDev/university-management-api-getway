import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.post('/academic-departments', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get('/academic-departments', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get(`/academic-departments/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.patch(
    `/academic-departments/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.delete(
    `/academic-departments/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const AcademicDepartmentService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
