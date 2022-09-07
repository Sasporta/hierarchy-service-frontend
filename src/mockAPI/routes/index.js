import { getEmployees } from './employees';
import { getCompanies, getCompany } from './companies';
import { getCompanyInfo } from './companyInfo';

export function routes() {
	this.urlPrefix = process.env.REACT_APP_PROD_URL;
	this.timing = 400;

	this.get('/companies', getCompanies);

  this.get('/companies/:id', getCompany);

	this.get('/companiesMetadata/:id', getCompanyInfo);

  this.get('/employees', getEmployees);

}
