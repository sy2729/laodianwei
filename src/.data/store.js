import {createStore} from 'redux';
import data from './.data';

let stateChanger = (state, action) => {
  if(state === undefined) {
    return data
  }else {
    if (action.type === 'GET_MENU') {
      return Object.assign({}, state, {
        menu: action.payload
      })
    }else if(action.type === 'THUMBS_UP'){
      let {data, num} = action.payload;
      let newState = JSON.parse(JSON.stringify(state))
      newState.menu.forEach((i)=> {
        if(i._id == data.menu_id) {
          i.content.forEach((j)=> {
            if(j._id == data.id) {
              j.thumbsUp = j.thumbsUp !== undefined ? j.thumbsUp + 1 : 1;
              return
            }
          })
        };
      })
      return Object.assign({}, state, {
        ...newState
      })
    }else {
      return state
    }
  }
}

const store = createStore(stateChanger)


export default store;