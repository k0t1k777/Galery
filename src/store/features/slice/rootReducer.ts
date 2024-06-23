import { combineReducers } from 'redux';
import pictureReducer from 'src/store/features/slice/slice';

const rootReducer = combineReducers({
  picture: pictureReducer, 
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
