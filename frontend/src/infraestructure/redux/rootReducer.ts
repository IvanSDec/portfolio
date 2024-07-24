import { combineReducers } from 'redux'
import headerReducer from './slices/headerSlice'

const rootReducer = combineReducers({
	header: headerReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer