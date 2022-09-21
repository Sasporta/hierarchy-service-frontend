export const getEmployeesInfo = (
	schema,
	{ queryParams: { companyUuid, limit } },
) => {
	const query = companyUuid ? { companyUuid } : {};

	return schema.employeeInfos.where(query);
};
