import { configureStore } from '@reduxjs/toolkit';

import metadataReducer from './metadata';
import companiesReducer from './companies';
import hierarchyReducer from './hierarchy';
import apiResultsReducer from './apiResults';

export default configureStore({
  reducer: {
    metadata: metadataReducer,
    companies: companiesReducer,
    hierarchy: hierarchyReducer,
    apiResults: apiResultsReducer,
  },
});
