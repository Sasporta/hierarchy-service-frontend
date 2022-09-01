export function routes() {
	this.urlPrefix = process.env.REACT_APP_PROD_URL;
	this.timing = 100;

	this.get('/companies', (schema, { queryParams: { limit } }) => {
		return schema.companies.all();
	});

	this.get(
		'/employees',
		(schema, { queryParams: { companyUuid, managerUuid, limit } }) => {
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
		},
	);

  this.get('/employees/parent/:id', (schema, { params: { id: uuid } }) => {
    const employee = schema.employees.findBy({ uuid });

		return schema.employees.findBy({ id: employee.manager_id });
	});

	this.get(
		'/employees/parent-and-uncles/:id',
		(schema, { params: { id: uuid } }) => {
      const child = schema.employees.findBy({ uuid });

			const parent = schema.employees.findBy({ id: child.manager_id });

			if (!parent) return null;

			const grandparent = schema.employees.findBy({ id: parent.manager_id });

			if (!grandparent)
				return schema.employees.where({
					company_id: parent.company_id,
					manager_id: null,
				});

			return schema.employees.where({
				manager_id: grandparent.id,
			});
		},
	);
}
