import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';

export const employee = Factory.extend({
  uuid() {
    return faker.datatype.uuid();
  },

  name() {
    return faker.name.fullName();
  },

  title() {
    return faker.name.jobTitle();
  },

  company_id() {
    return '1';
  },

  manager_id() {
    return null;
  },
});
