import {INCREMENT, DECREMENT} from "./actions";

const initialState = {count: 0};


export const counter = (state = initialState, action) => {
    if (!action) {
        return state;
    }
    switch(action.type) {
        //Increases Count
        case INCREMENT:
            return {
                count: state.count + 1
            }

            break;

        //Decreases Count
        case DECREMENT:
            return {
                count: state.count - 1
            }

            break;
        default:
            return state;
    }
}