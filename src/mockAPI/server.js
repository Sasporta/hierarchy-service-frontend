import { createServer } from 'miragejs';

import { seeds } from './seeds';
import { models } from './models';
import { routes } from './routes';
import { factories } from './factories';
import { serializers } from './serializers';

export const makeServer = ({ environment = 'test' }) => {
	createServer({ environment, models, routes, factories, seeds, serializers });
};
