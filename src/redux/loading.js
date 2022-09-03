import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
	name: 'loading',
	initialState: {
		loadingCompanies: true,
		loadingGrandparents: null,
		loadingParents: null,
		loadingChildren: null,
	},
	reducers: {
		setLoadingCompanies: (state, action) => {
			state.loadingCompanies = action.payload;
		},
		setLoadingGrandparents: (state, action) => {
			state.loadingGrandparents = action.payload;
		},
		setLoadingParents: (state, action) => {
			state.loadingParents = action.payload;
		},
		setLoadingChildren: (state, action) => {
			state.loadingChildren = action.payload;
		},
	},
});

export const {
	setLoadingCompanies,
	setLoadingGrandparents,
	setLoadingParents,
	setLoadingChildren,
} = loadingSlice.actions;

export default loadingSlice.reducer;
