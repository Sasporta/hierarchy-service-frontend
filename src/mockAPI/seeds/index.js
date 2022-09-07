import { seedCompanies } from './companies';
import { seedEmployees } from './employees';
import { seedCompanyInfo } from './companyInfo';

export const seeds = server => {
	seedCompanies(server);

  seedEmployees(server);

	seedCompanyInfo(server);
};
