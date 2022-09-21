import { employeesUuids } from './employees';

export const seedEmployeeInfo = server => {
	// for Metadata page
	for (let i = 0; i < employeesUuids.length; i++) {
		if (i > 0 && i < 3) {
			server.create('employeeInfo', {
				_id: employeesUuids[i],
				subordinatesCount: 5,
			}); // 2, 3
		} else if ((i > 5 && i < 16) || (i > 18 && i < 25) || i > 25) {
			server.create('employeeInfo', {
				_id: employeesUuids[i],
				subordinatesCount: 0,
			}); // 7-16, 20-25, 27-37
		} else {
			server.create('employeeInfo', {
				_id: employeesUuids[i],
				subordinatesCount: 3,
			}); // 1, 4, 5, 6, 17, 18, 19, 26
		}
	}
};
