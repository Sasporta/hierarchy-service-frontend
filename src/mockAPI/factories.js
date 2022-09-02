import { faker } from '@faker-js/faker';
import { Factory } from 'miragejs';

export const factories = {
	company: Factory.extend({
		uuid() {
			return faker.datatype.uuid();
		},

		name() {
			return faker.company.name();
		},

		country() {
			return faker.address.country();
		},

		img_url() {
			const imgsCollection = {
				1: 'https://brandmark.io/logo-rank/random/apple.png',
				2: 'https://www.jetpunk.com/img/user-photo-library/d4/d450bd5b70-450.png',
				3: 'https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png',
			};

			return imgsCollection[faker.datatype.number({ min: 1, max: 3 })];
		},
	}),

	employee: Factory.extend({
		uuid() {
			return faker.datatype.uuid();
		},

		name() {
			return faker.name.fullName();
		},

		title() {
			return faker.name.jobTitle();
		},

		age() {
			return faker.datatype.number({ min: 20, max: 60 });
		},

		company_id() {
			return '1';
		},

		manager_id() {
			return null;
		},
	}),
};
