import {configureStore} from '@reduxjs/toolkit';
import reducers from './index';
import addItem from './addItem'; 

const store=configureStore({
   reducer:{addItem}
})
//export default store;

//const store=configureStore(rootReducers);

export default store;


