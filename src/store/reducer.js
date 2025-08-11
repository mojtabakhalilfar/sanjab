import * as actionTypes from "./actions"
import ProductInfo from "../Components/ProductInfo/ProductInfo";

const inistialState={
    counter:10 ,

    vorod:false,
    sabtname:false,
    sabtname2:false,
    togglequestion:false,
    showsabad:false,
    shopingCart:{
        maqz1:0,
        maqz2:0,
        maqz3:0,
        maqz4:0,
        maqz5:0,
        maqz6:0,
        maqz7:0,
        maqz8:0,
    },

}




const reducer = (state=inistialState, action) => {

  console.log()
  switch (action.type) {

    case actionTypes.VOROD:
        return{...state , vorod:true , sabtname:false , sabtname2:false}
    case actionTypes.SABTNAME:
        return{...state , sabtname:true , vorod:false , sabtname2:false}
    case actionTypes.SABTNAME2:
        return{...state , sabtname2:true , sabtname:true , vorod:false}
    case actionTypes.CLOSEMODAL:
        return{...state , sabtname:false , vorod:false}
    case actionTypes.TOGGLEQUESTION:
          return{...state , togglequestion: !state.togglequestion }
    case actionTypes.SHOWSABAD:
        return{...state , showsabad:true}
    case actionTypes.CLOSESABAD:
        return{...state , showsabad:false}
    case actionTypes.CHANGESABAD:
        return{...state , shopingCart:ProductInfo.sabadkharid }
    case actionTypes.ADDMAQZ1:
        var newshoping1 = {...state.shopingCart}
        var newmaqz1 =newshoping1.maqz1
        newmaqz1+=1
        newshoping1={...newshoping1,maqz1:newmaqz1}
        return{...state,shopingCart:newshoping1}
    case actionTypes.ADDMAQZ2:
        var newshoping2 = {...state.shopingCart}
        var newmaqz2 =newshoping2.maqz2
        newmaqz2+=1
        newshoping2={...newshoping2,maqz2:newmaqz2}
        return{...state,shopingCart:newshoping2}
    case actionTypes.ADDMAQZ3:
        var newshoping3 = {...state.shopingCart}
        var newmaqz3 =newshoping3.maqz3
        newmaqz3+=1
        newshoping3={...newshoping3,maqz3:newmaqz3}
        return{...state,shopingCart:newshoping3}
    case actionTypes.ADDMAQZ4:
        var newshoping4 = {...state.shopingCart}
        var newmaqz4 =newshoping4.maqz4
        newmaqz4+=1
        newshoping4={...newshoping4,maqz4:newmaqz4}
        return{...state,shopingCart:newshoping4}
    case actionTypes.ADDMAQZ5:
        var newshoping5 = {...state.shopingCart}
        var newmaqz5 =newshoping5.maqz5
        newmaqz5+=1
        newshoping5={...newshoping5,maqz5:newmaqz5}
        return{...state,shopingCart:newshoping5}
    case actionTypes.ADDMAQZ6:
        var newshoping6 = {...state.shopingCart}
        var newmaqz6 =newshoping6.maqz6
        newmaqz6+=1
        newshoping6={...newshoping6,maqz6:newmaqz6}
        return{...state,shopingCart:newshoping6}
    case actionTypes.ADDMAQZ7:
        var newshoping7 = {...state.shopingCart}
        var newmaqz7 =newshoping7.maqz7
        newmaqz7+=1
        newshoping7={...newshoping7,maqz7:newmaqz7}
        return{...state,shopingCart:newshoping7}
    case actionTypes.ADDMAQZ8:
        var newshoping8 = {...state.shopingCart}
        var newmaqz8 =newshoping8.maqz8
        newmaqz8+=1
        newshoping8={...newshoping8,maqz8:newmaqz8}
        return{...state,shopingCart:newshoping8}
    case actionTypes.SUBMAQZ1:
        var newshoping1 = {...state.shopingCart}
        var newmaqz1 =newshoping1.maqz1
        if(newmaqz1>0)
        newmaqz1-=1
        newshoping1={...newshoping1,maqz1:newmaqz1}
        return{...state,shopingCart:newshoping1}
    case actionTypes.SUBMAQZ2:
        var newshoping2 = {...state.shopingCart}
        var newmaqz2 =newshoping2.maqz2
        if(newmaqz2>0)
        newmaqz2-=1
        newshoping2={...newshoping2,maqz2:newmaqz2}
        return{...state,shopingCart:newshoping2}
    case actionTypes.SUBMAQZ3:
        var newshoping3 = {...state.shopingCart}
        var newmaqz3 =newshoping3.maqz3
        if(newmaqz3>0)
        newmaqz3-=1
        newshoping3={...newshoping3,maqz3:newmaqz3}
        return{...state,shopingCart:newshoping3}
    case actionTypes.SUBMAQZ4:
        var newshoping4 = {...state.shopingCart}
        var newmaqz4 =newshoping4.maqz4
        if(newmaqz4>0)
        newmaqz4-=1
        newshoping4={...newshoping4,maqz4:newmaqz4}
        return{...state,shopingCart:newshoping4}
    case actionTypes.SUBMAQZ5:
        var newshoping5 = {...state.shopingCart}
        var newmaqz5 =newshoping5.maqz5
        if(newmaqz5>0)
        newmaqz5-=1
        newshoping5={...newshoping5,maqz5:newmaqz5}
        return{...state,shopingCart:newshoping5}
    case actionTypes.SUBMAQZ6:
        var newshoping6 = {...state.shopingCart}
        var newmaqz6 =newshoping6.maqz6
        if(newmaqz6>0)
        newmaqz6-=1
        newshoping6={...newshoping6,maqz6:newmaqz6}
        return{...state,shopingCart:newshoping6}
    case actionTypes.SUBMAQZ7:
        var newshoping7 = {...state.shopingCart}
        var newmaqz7 =newshoping7.maqz7
        if(newmaqz7>0)
        newmaqz7-=1
        newshoping7={...newshoping7,maqz7:newmaqz7}
        return{...state,shopingCart:newshoping7}
    case actionTypes.SUBMAQZ8:
        var newshoping8 = {...state.shopingCart}
        var newmaqz8 =newshoping8.maqz8
        if(newmaqz8>0)
        newmaqz8-=1
        newshoping8={...newshoping8,maqz8:newmaqz8}
        return{...state,shopingCart:newshoping8}
    default:
        return state
    }
}

export default reducer

