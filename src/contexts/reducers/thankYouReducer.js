import uuid from 'uuid/v1'


export const thankYouReducer = (state, action) => {
  switch(action.type) {
    case 'ADD_THANKYOU':
      return [...state, {
        title:action.thankYou.title,
        id: uuid()
      }]
    case 'REMOVE_THANKYOU':
      return state.filter(item => item.id !== action.id)
    default: 
      return state
  }
}
