export const company1Uuid = '4e9fdee6-b0b6-448f-baf2-53c27b84536b';

export const seedCompanies = server => {
	server.create('company', { uuid: company1Uuid });

	server.createList('company', 15);
};
