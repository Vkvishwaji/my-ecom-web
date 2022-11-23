const productReducer = (state, action) => {
  // if(action.type===API_LOADING){
  //     return{
  //         ...state,
  //         isLoading:true
  //     }
  // }
  // if(action.type===API_ERROR){
  //     return{
  //         ...state,
  //         isError:true
  //     }
  // }
  // return state;

  // switch second method
  switch (action.type) {
    case "API_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA":
      const featureData = action.payload.filter((curElm) => {
        return curElm.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case "SET_SINGAL_LOADING":
      return {
        ...state,
        isSingalLoading: false,
        singalProduct: action.payload,
      };
      case "SET_SINGAL_ERROR":
      return {
        ...state,
        isSingalLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
export default productReducer;
