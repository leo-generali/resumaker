import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import resumeEditorReducer from '../reducers/resumeEditor';
import resumeEditorInitialState from './resumeEditorInitialState';

const middleware = [thunk];

const resumeEditorStore = createStore(
  resumeEditorReducer,
  resumeEditorInitialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default resumeEditorStore;
