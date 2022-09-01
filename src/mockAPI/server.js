import { createServer } from 'miragejs';

import { seeds } from './seeds';
import { models } from './models';
import { routes } from './routes';
import { factories } from './factories';
import { serializers } from './serializers';

createServer({ models, routes, factories, seeds, serializers });
