import { NEW_CART, FETCH_MEMBER, NEW_PASTORDERS, EMPTY_CART } from '../actions/types';

const initialState = {
    items: []
}


export default function(state = initialState, action){
    switch(action.type){ 
            case NEW_CART:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
            case FETCH_MEMBER:
            return {
                ...state,
                items: [action.payload, ...state.items]
            }
                case NEW_PASTORDERS:
                    return {
                        ...state,
                        items: [action.payload, ...state.items]
                    }
                    case EMPTY_CART:
                        return {
                            ...state,
                            items: [action.payload, ...state.items]
                        }
                        
        default: 
            return state;
    }
}
