import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.post('/academic-faculties', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get('/academic-faculties', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get(`/academic-faculties/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.patch(
    `/academic-faculties/${req.params.id}`,
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
    `/academic-faculties/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const AcademicFacultyService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB
};
