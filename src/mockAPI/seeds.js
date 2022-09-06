export const seeds = server => {
	server.createList('company', 16);

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

	// Employees under manager id=22
	server.createList('employee', 3, { manager_id: 17 }); // ids: 26,27,28

	// Employees under manager id=23
	server.createList('employee', 3, { manager_id: 18 }); // ids: 29,30,31

	// Employees under manager id=24
	server.createList('employee', 3, { manager_id: 19 }); // ids: 32,33,34

	// --------------------------- Level 4 ---------------------------

	// Out sourced employees under employee id=31
	server.createList('employee', 3, { manager_id: 26 }); // ids: 35,36,37
};
