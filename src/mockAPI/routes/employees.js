export const getEmployees = (
  schema,
  { queryParams: { companyUuid, managerUuid, limit } },
) => {
  let query;

  const { id: company_id } = companyUuid
    ? schema.companies.findBy({ uuid: companyUuid })
    : { id: undefined };

  const { id: manager_id } =
    managerUuid === 'null'
      ? { id: null }
      : managerUuid
      ? schema.employees.findBy({ uuid: managerUuid })
      : { id: undefined };

  if (company_id && manager_id !== undefined) {
    query = { company_id, manager_id };
  } else if (company_id) {
    query = { company_id };
  } else if (manager_id !== undefined) {
    query = { manager_id };
  }

  return schema.employees.where(query);
};
