export const getCompanies = (schema, { queryParams: { limit } }) => {
  return schema.companies.all();
};

export const getCompany = (schema, { params: { id: uuid } }) => {
  return schema.companies.findBy({ uuid });
};
