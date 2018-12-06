import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import resumeEditorReducer from '../reducers/resumeEditor';

const middleware = [thunk];

const resumeEditorInitialState = {};

const resumeEditorStore = createStore(
  resumeEditorReducer,
  resumeEditorInitialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default resumeEditorStore;
