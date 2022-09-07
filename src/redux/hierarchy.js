import { createSlice } from '@reduxjs/toolkit';

export const hierarchySlice = createSlice({
	name: 'hierarchy',
	initialState: {
		hierarchy: {},
		hierarchyLevel: null,
	},
	reducers: {
		setHierarchy: (state, { payload }) => {
			state.hierarchy[payload.level] = payload.employees;
		},
		setHierarchyLevel: (state, action) => {
			state.hierarchyLevel = action.payload;
		},
	},
});

export const { setHierarchy, setHierarchyLevel } =
	hierarchySlice.actions;

export default hierarchySlice.reducer;
