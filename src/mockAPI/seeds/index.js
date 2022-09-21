import { seedCompanies } from './companies';
import { seedEmployees } from './employees';
import { seedEmployeeInfo } from './employeesInfo';

export const seeds = server => {
  seedCompanies(server);

  seedEmployees(server);

  seedEmployeeInfo(server);
};
