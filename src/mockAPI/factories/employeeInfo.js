import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

import { company1Uuid } from '../seeds/companies';

export const employeeInfo = Factory.extend({
  _id() {
    return faker.datatype.uuid();
  },

  companyUuid() {
    return company1Uuid;
  },

  subordinatesCount() {
    return faker.datatype.number({ min: 0, max: 5 });
  },
});
