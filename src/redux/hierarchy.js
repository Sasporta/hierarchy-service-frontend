import { createSlice } from '@reduxjs/toolkit';

export const hierarchySlice = createSlice({
	name: 'hierarchy',
	initialState: {
		grandparents: [],
		parents: [],
		children: [],
		grandparent: null,
		parent: null,
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
		chooseGrandparent: (state, action) => {
			state.grandparent = action.payload;
		},
		chooseParent: (state, action) => {
			state.parent = action.payload;
		},
	},
});

export const {
	setGrandparents,
	setParents,
	setChildren,
	chooseGrandparent,
	chooseParent,
} = hierarchySlice.actions;

export default hierarchySlice.reducer;
