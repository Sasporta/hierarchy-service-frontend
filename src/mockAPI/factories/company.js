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

	img_url() {
		const imgsCollection = {
			1: 'https://brandmark.io/logo-rank/random/apple.png',
			2: 'https://www.jetpunk.com/img/user-photo-library/d4/d450bd5b70-450.png',
			3: 'https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png',
		};

		return imgsCollection[faker.datatype.number({ min: 1, max: 3 })];
	},
});
