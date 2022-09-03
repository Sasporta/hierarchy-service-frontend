import { createSlice } from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
	name: 'companies',
	initialState: {
		companies: [],
		filteredCompanies: [],
	},
	reducers: {
		setCompanies: (state, action) => {
			state.companies = action.payload;
		},
		setFilteredCompanies: (state, action) => {
			state.filteredCompanies = action.payload;
		},
	},
});

export const { setCompanies, setFilteredCompanies } = companiesSlice.actions;

export default companiesSlice.reducer;
