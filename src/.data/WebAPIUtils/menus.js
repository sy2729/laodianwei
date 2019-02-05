import axios from 'axios';
import { addMenu } from '../actions'
import store from '../store';

// http://localhost:3001/menu   #dev
// https://laodianwei.herokuapp.com/menu   #production

axios.get('https://laodianwei.herokuapp.com/menu')
  .then(result=>{ 
    store.dispatch(addMenu(result.data))
  });