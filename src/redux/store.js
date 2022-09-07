import { configureStore } from '@reduxjs/toolkit';

import metadataReducer from './metadata';
import companiesReducer from './companies';
import hierarchyReducer from './hierarchy';

export default configureStore({
	reducer: {
		companies: companiesReducer,
		metadata: metadataReducer,
		hierarchy: hierarchyReducer,
	},
});
