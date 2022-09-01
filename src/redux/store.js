import { configureStore } from '@reduxjs/toolkit';

import companiesReducer from './companies';
import hierarchyReducer from './hierarchy';

export default configureStore({
	reducer: {
		companiesList: companiesReducer,
		hierarchyList: hierarchyReducer,
	},
});
