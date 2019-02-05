import axios from 'axios';
import { thumbsUpAction } from '../actions'
import store from '../store';

// http://localhost:3001/menu   #dev
// https://laodianwei.herokuapp.com/menu   #production

const sendThumbsUpReq = (data)=> {
  axios.post(`https://laodianwei.herokuapp.com/thumbs_up?item_id=${data.id}&menu_id=${data.menu_id}`)
  .then(result=>{ 
    store.dispatch(thumbsUpAction({
      data,
      num: 1
    }))
  });
}

export default sendThumbsUpReq;