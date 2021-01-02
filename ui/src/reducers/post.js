import * as types from '../actions/types';

const initialState = {
    posts: []
}

const postReducer = (state=initialState,actions)=>{
    switch(actions.type){
        case types.FETCH_POSTS:
            return{
                ...state,
                posts:actions.payload,
            };

            default:
                return{
                    ...state
                }
    };
};

export default postReducer;