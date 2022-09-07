import { faker } from '@faker-js/faker';

export const employeesUuids = Array.from({ length: 37 }, () => faker.datatype.uuid());

export const seedEmployees = server => {
	// for Hierarchy page
	for (let i = 0; i < employeesUuids.length; i++) {
		// --------------------------- Level 1 ---------------------------
    if (i < 3) {
			// CEOs
			server.create('employee', { uuid: employeesUuids[i] }); // ids: 1,2,3
			// --------------------------- Level 2 ---------------------------
		} else if (i < 6) {
			// Team leads under CEO with id=1
			server.create('employee', { uuid: employeesUuids[i], manager_id: 1 }); // ids: 4,5,6
		} else if (i < 11) {
			// Team leads under CEO with id=2
			server.create('employee', { uuid: employeesUuids[i], manager_id: 2 }); // ids: 7-11
		} else if (i < 16) {
			// Team leads under CEO with id=3
			server.create('employee', { uuid: employeesUuids[i], manager_id: 3 }); // ids: 12-16
			// --------------------------- Level 3 ---------------------------
		} else if (i < 19) {
			// Managers under team lead with id=4
			server.create('employee', { uuid: employeesUuids[i], manager_id: 4 }); // ids: 17,18,19
		} else if (i < 22) {
			// Managers under team lead with id=5
			server.create('employee', { uuid: employeesUuids[i], manager_id: 5 }); // ids: 20,21,22
		} else if (i < 25) {
			// Managers under team lead with id=6
			server.create('employee', { uuid: employeesUuids[i], manager_id: 6 }); // ids: 23,24,25
			// --------------------------- Level 4 ---------------------------
		} else if (i < 28) {
			// Employees under manager with id=17
			server.create('employee', { uuid: employeesUuids[i], manager_id: 17 }); // ids: 26,27,28
		} else if (i < 31) {
			// Employees under manager with id=18
			server.create('employee', { uuid: employeesUuids[i], manager_id: 18 }); // ids: 29,30,31
		} else if (i < 34) {
			// Employees under manager with id=19
			server.create('employee', { uuid: employeesUuids[i], manager_id: 19 }); // ids: 32,33,34
			// --------------------------- Level 5 ---------------------------
    } else if (i < 37) {
			// Out sourced employees under employee with id=26
			server.create('employee', { uuid: employeesUuids[i], manager_id: 26 }); // ids: 35,36,37
		}
	}
};

export const seedEmployees2 = server => {
	// for Hierarchy page

	// --------------------------- Level 1 ---------------------------

	// CEOs
	server.createList('employee', 3); // ids: 1,2,3

	// --------------------------- Level 2 ---------------------------

	// Team leads under CEO with id=1
	server.createList('employee', 3, { manager_id: 1 }); // ids: 4,5,6

	// Team leads under CEO with id=2
	server.createList('employee', 5, { manager_id: 2 }); // ids: 7-11

	// Team leads under CEO with id=3
	server.createList('employee', 5, { manager_id: 3 }); // ids: 12-16

	// --------------------------- Level 3 ---------------------------

	// Managers under team lead id=4
	server.createList('employee', 3, { manager_id: 4 }); // ids: 17,18,19

	// Managers under team lead id=5
	server.createList('employee', 3, { manager_id: 5 }); // ids: 20,21,22

	// Managers under team lead id=6
	server.createList('employee', 3, { manager_id: 6 }); // ids: 23,24,25

	// --------------------------- Level 4 ---------------------------

	// Employees under manager id=17
	server.createList('employee', 3, { manager_id: 17 }); // ids: 26,27,28

	// Employees under manager id=18
	server.createList('employee', 3, { manager_id: 18 }); // ids: 29,30,31

	// Employees under manager id=19
	server.createList('employee', 3, { manager_id: 19 }); // ids: 32,33,34

	// --------------------------- Level 5 ---------------------------

	// Out sourced employees under employee id=26
	server.createList('employee', 3, { manager_id: 26 }); // ids: 35,36,37
};
