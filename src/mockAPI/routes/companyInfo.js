export const getCompanyInfo = (schema, { params: { id: uuid } }) => {
	return schema.companyInfos.findBy({ companyUuid: uuid });
};
