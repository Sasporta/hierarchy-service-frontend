import { createSlice } from '@reduxjs/toolkit';

export const hierarchySlice = createSlice({
	name: 'hierarchy',
	initialState: {
		grandparents: [],
		parents: [],
		children: [],
		grandparent: null,
		parent: null,
		topHierarchy: [],
	},
	reducers: {
		setGrandparents: (state, action) => {
			state.grandparents = action.payload;
		},
		setParents: (state, action) => {
			state.parents = action.payload;
		},
		setChildren: (state, action) => {
			state.children = action.payload;
		},
		setGrandparent: (state, action) => {
			state.grandparent = action.payload;
		},
		setParent: (state, action) => {
			state.parent = action.payload;
		},
		setTopHierarchy: (state, action) => {
			state.topHierarchy = action.payload;
		},
	},
});

export const {
	setGrandparents,
	setParents,
	setChildren,
	setGrandparent,
	setParent,
	setTopHierarchy,
} = hierarchySlice.actions;

export default hierarchySlice.reducer;
