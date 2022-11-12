const productReducer=(state,action)=>{
  
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
    switch(action.type){
        case "API_LOADING":
        return{
            ...state,
            isLoading:true
        }
         case "SET_API_DATA":
            const featureData=action.payload.fillter((curElm)=>{
                return curElm.featured===true;
            })
            return{
                ...state,
                isLoading:false,
                products: action.payload,
                featureProducts:featureData
            }
        

        case "API_ERROR":
        return{
            ...state,
            isError:true
        }

        default:
            return state;
    }


}
export default productReducer;