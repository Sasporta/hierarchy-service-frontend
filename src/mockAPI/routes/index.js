import { getEmployees } from './employees';
import { getCompanies, getCompany } from './companies';
import { getEmployeesInfo } from './employeesInfo';

export function routes() {
	this.urlPrefix = process.env.REACT_APP_PROD_URL;

	this.timing = 400;

  this.get('/employees', getEmployees);

	this.get('/companies', getCompanies);

  this.get('/companies/:id', getCompany);

	this.get('/employeesMetadata', getEmployeesInfo);

}
