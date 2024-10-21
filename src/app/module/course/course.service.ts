import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService } from '../../../shared/axios';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.post('/course', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get('/course', {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const getByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.get(`/course/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const updateOneInDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.patch(`/course/${req.params.id}`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.delete(`/course/${req.params.id}`, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return result;
};

const assignFaculty = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.post(
    `/course/remove-faculty/${req.params.id}`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

const removeAssignFaculty = async (req: Request): Promise<IGenericResponse> => {
  const result: IGenericResponse = await CoreService.delete(
    `/course/remove-faculty/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return result;
};

export const CourseService = {
  insertIntoDB,
  getAllFromDB,
  getByIdFromDB,
  updateOneInDB,
  deleteByIdFromDB,
  removeAssignFaculty,
  assignFaculty
};
