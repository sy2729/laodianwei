const GET_MENU = "GET_MENU";
const THUMBS_UP = "THUMBS_UP"

export function addMenu(content){
  return {
    type: GET_MENU,
    payload: content
  }
};

export function thumbsUpAction(content){
  return {
    type: THUMBS_UP,
    payload: content
  }
};