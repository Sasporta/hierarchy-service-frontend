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
			1: 'https://www.drupal.org/files/styles/grid-4-2x/public/datadog-logo-purple.png?itok=1gen8ZoL',
			2: 'https://static.vecteezy.com/system/resources/previews/003/399/771/original/youtube-icon-editorial-free-vector.jpg',
			3: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/folder_920_201707260845-1.png',
			4: 'https://static.datadoghq.com/static/images/logos/amazon-web-services_large.svg?auto=format',
			5: 'https://www.designevo.com/images/blog/blue-logos/intel-logo-blue.jpg',
			6: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTRjzHIOImmmC60fs62WG4wdwnNU7tJXBwze17PXTkKja49o9QfGNAKJc_x56oITIKmS4&usqp=CAU',
		};

		return imgsCollection[faker.datatype.number({ min: 1, max: 6 })];
	},
});
