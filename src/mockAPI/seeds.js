export const seeds = server => {
	server.createList('company', 16);

	// grandparents
	server.createList('employee', 3); // ids: 1,2,3

	// parents from grandparent id=1
	server.createList('employee', 3, { manager_id: 1 }); // ids: 4,5,6

	// parents from grandparent id=2
	server.createList('employee', 6, { manager_id: 2 }); // ids: 7-12

	// parents from grandparent id=3
	server.createList('employee', 9, { manager_id: 3 }); // ids: 13-21

	// children from parent id=4
	server.createList('employee', 3, { manager_id: 4 }); // ids: 22,23,24

	// children from parent id=5
	server.createList('employee', 3, { manager_id: 5 }); // ids: 25,26,27

	// children from parent id=6
	server.createList('employee', 3, { manager_id: 6 }); // ids: 28,29,30

	// grandchildren from children id=22
  server.createList('employee', 3, { manager_id: 22 }); // ids: 31,32,33

	// grandchildren from children id=23
  server.createList('employee', 3, { manager_id: 23 }); // ids: 31,32,33

	// grandchildren from children id=24
	server.createList('employee', 3, { manager_id: 24 }); // ids: 31,32,33
};
