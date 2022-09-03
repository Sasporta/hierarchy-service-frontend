import { configureStore } from '@reduxjs/toolkit';

import loadingReducer from './loading';
import companiesReducer from './companies';
import hierarchyReducer from './hierarchy';

export default configureStore({
	reducer: {
		loadingProcess: loadingReducer,
		companiesList: companiesReducer,
		hierarchyList: hierarchyReducer,
	},
});
