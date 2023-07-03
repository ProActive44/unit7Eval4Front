const initState = {
  currUser: {},
  isLogin: false,
};

const userReducer = (state = initState, action) => {

    const {type, payload} = action;

    switch(type){
        default:
            return state;
    }
};

export {userReducer}