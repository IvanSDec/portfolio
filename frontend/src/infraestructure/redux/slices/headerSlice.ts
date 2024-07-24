// src/infraestructura/redux/exampleSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from '../initialStates/headerInitialStates';

const headerSlice = createSlice({
	name: 'example',
	initialState,
	reducers: {
		setOpen: (state, action: PayloadAction<boolean>) => {
			state.open = action.payload;
		},
	},
})

export const { setOpen } = headerSlice.actions
export default headerSlice.reducer