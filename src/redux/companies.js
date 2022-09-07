import { createSlice } from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
	name: 'companies',
	initialState: {
		chosenCompany: null,
		companies: [],
		filteredCompanies: [],
	},
	reducers: {
		setChosenCompany: (state, action) => {
			state.chosenCompany = action.payload;
		},
		setCompanies: (state, action) => {
			state.companies = action.payload;
		},
		setFilteredCompanies: (state, action) => {
			state.filteredCompanies = action.payload;
		},
	},
});

export const { setChosenCompany, setCompanies, setFilteredCompanies } =
	companiesSlice.actions;

export default companiesSlice.reducer;
