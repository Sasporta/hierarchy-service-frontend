import { createSlice } from '@reduxjs/toolkit';

export const hierarchySlice = createSlice({
	name: 'hierarchy',
	initialState: {
		company: null,
		hierarchy: {},
		hierarchyLevel: null,
	},
	reducers: {
		setCompany: (state, action) => {
			state.company = action.payload;
		},
		setHierarchy: (state, { payload }) => {
			state.hierarchy[payload.level] = payload.employees;
		},
		setHierarchyLevel: (state, action) => {
			state.hierarchyLevel = action.payload;
		},
	},
});

export const { setCompany, setHierarchy, setHierarchyLevel } =
	hierarchySlice.actions;

export default hierarchySlice.reducer;
