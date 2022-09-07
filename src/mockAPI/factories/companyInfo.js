import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

import { company1Uuid } from '../seeds/companies';

export const companyInfo = Factory.extend({
	_id() {
		return faker.datatype.hexadecimal({ length: 24, case: 'lower' });
	},

	companyUuid() {
		return company1Uuid;
	},

	employeesMetadata() {
		return {
			[faker.datatype.uuid()]: {
				subordinates: faker.datatype.number({ min: 0, max: 5 }),
			},
		};
	},
});
