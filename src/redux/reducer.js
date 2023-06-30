const initialState = {
    myFavorites: [],
    }
const rootReducer = (state = initialState, {type, payload}) => {
switch(type){
case 'ADD_FAV':
return{myFavorites: [...state.myFavorites, payload]}
 
case 'REMOVE_FAV':

default:
  return{...state};
}
}
export default rootReducer;