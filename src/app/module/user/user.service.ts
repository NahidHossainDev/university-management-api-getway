import { Request } from 'express';
import { FileUploadHandler } from '../../../helpers/fileUploadHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IUploadFile } from '../../../interfaces/file';
import { AuthService } from '../../../shared/axios';

const createStudent = async (req: Request) => {
  const file = req.file as IUploadFile;
  const uploadedImg = await FileUploadHandler.uploadToCloudinary(file);

  if (uploadedImg) req.body.profileImage = uploadedImg.secure_url;

  const { academicDepartment, academicFaculty, academicSemester } = req.body.student;

  const academicDepartmentResponse = await AuthService.get(
    `/academic-department/${academicDepartment}`
  );
  if (academicDepartmentResponse.data)
    req.body.student.academicDepartment = academicDepartmentResponse.data.id;

  const academicFacultyResponse = await AuthService.get(`/academic-faculty/${academicFaculty}`);
  if (academicFacultyResponse.data) {
    req.body.student.academicFaculty = academicFacultyResponse.data.id;
  }
  const academicSemesterResponse = await AuthService.get(`/academic-semesters/${academicSemester}`);

  if (academicSemesterResponse.data) {
    req.body.student.academicSemester = academicSemesterResponse.data.id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-student', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });

  return response;
};

const createFaculty = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadedProfileImage = await FileUploadHandler.uploadToCloudinary(file);

  if (uploadedProfileImage) {
    req.body.faculty.profileImage = uploadedProfileImage.secure_url;
  }

  const { academicDepartment, academicFaculty } = req.body.faculty;

  const academicDepartmentResponse: IGenericResponse = await AuthService.get(
    `/academic-department/${academicDepartment}`
  );

  if (academicDepartmentResponse.data) {
    req.body.faculty.academicDepartment = academicDepartmentResponse.data.id;
  }

  const academicFacultyResponse: IGenericResponse = await AuthService.get(
    `/academic-faculty/${academicFaculty}`
  );

  if (academicFacultyResponse.data) {
    req.body.faculty.academicFaculty = academicFacultyResponse.data.id;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-faculty', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const createAdmin = async (req: Request): Promise<IGenericResponse> => {
  const file = req.file as IUploadFile;

  const uploadedProfileImage = await FileUploadHandler.uploadToCloudinary(file);

  if (uploadedProfileImage) {
    req.body.admin.profileImage = uploadedProfileImage.secure_url;
  }

  const response: IGenericResponse = await AuthService.post('/users/create-admin', req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

export const UserService = {
  createStudent,
  createFaculty,
  createAdmin
};
