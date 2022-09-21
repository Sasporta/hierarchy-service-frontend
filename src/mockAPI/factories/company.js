import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export const company = Factory.extend({
	uuid() {
		return faker.datatype.uuid();
	},

	name() {
		return faker.company.name();
	},

	country() {
		return faker.address.country();
	},
});
