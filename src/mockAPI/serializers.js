import { Serializer } from 'miragejs';

export const serializers = {
	company: Serializer.extend({
		embed: true,
		root: false,
		attrs: ['uuid', 'name', 'country', 'img_url'],
	}),

	employee: Serializer.extend({
		embed: true,
		root: false,
		attrs: ['uuid', 'name', 'age'],
	}),
};
