import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
	name: 'loading',
	initialState: {
		loadingCompanies: true,
		loadingEmployees: null,
	},
	reducers: {
		setLoadingCompanies: (state, action) => {
			state.loadingCompanies = action.payload;
		},
		setLoadingEmployees: (state, action) => {
			state.loadingEmployees = action.payload;
		},
	},
});

export const { setLoadingCompanies, setLoadingEmployees } =
	loadingSlice.actions;

export default loadingSlice.reducer;
