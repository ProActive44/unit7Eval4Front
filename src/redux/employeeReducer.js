const initState = {
    isLoading:false,
    isError:false,
    AllEmployees: {},
  };
  
  const employeeReducer = (state = initState, action) => {
  
      const {type, payload} = action;
  
      switch(type){
          default:
              return state;
      }
  };
  
  export {employeeReducer}