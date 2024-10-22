import express from 'express';
import { AcademicDepartmentRoutes } from '../module/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../module/academicFaculty/academicFaculty.routes';
import { AcademicSemesterRoutes } from '../module/academicSemester/academicSemester.routes';
import { BuildingRoutes } from '../module/building/building.routes';
import { CourseRoutes } from '../module/course/course.route';
import { UserRoutes } from '../module/user/user.routes';

export const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes
  },
  {
    path: '/academic-departments',
    route: AcademicDepartmentRoutes
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes
  },
  // {
  //   path: '/faculty',
  //   route: FacultyRoutes,
  // },
  // {
  //   path: '/student',
  //   route: StudentRoutes,
  // },
  {
    path: '/building',
    route: BuildingRoutes
  },
  // {
  //   path: '/room',
  //   route: RoomRoutes,
  // },
  {
    path: '/course',
    route: CourseRoutes
  }
  // {
  //   path: '/semester-register',
  //   route: SemesterRegisterRouter,
  // },
  // {
  //   path: '/offered-course',
  //   route: OfferedCourseRoutes,
  // },
  // {
  //   path: '/offered-course-section',
  //   route: offeredCourseSectionRoutes,
  // },
  // {
  //   path: '/offered-course-class-schedule',
  //   route: offeredCourseClassScheduleRoutes,
  // },
  // {
  //   path: '/semester-register',
  //   route: SemesterRegisterRouter,
  // },
  // {
  //   path: '/student-course-enroll',
  //   route: studentEnrolledCourseRoutes,
  // },
  // {
  //   path: '/student-enrolled-course-marks',
  //   route: studentEnrolledCourseMarkRoutes,
  // },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
