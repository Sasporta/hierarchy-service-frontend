import { faker } from '@faker-js/faker';

import { employeesUuids } from './employees';

export const seedCompanyInfo = server => {
	server.create('companyInfo', {
		employeesMetadata: employeesUuids.reduce(
			(a, c) => ({
				...a,
				[c]: { subordinates: faker.datatype.number({ min: 0, max: 5 }) },
			}),
			{},
		),
	});
};
