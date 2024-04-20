import { createStore } from "redux";
import { combineReducers } from "redux";
let data = {
    name: "",
    source: "",
    disgination: "",
    startdate: "",
    enddate: ""
}
function Bank(state = data, action) {
    switch (action.type) {
        case 'updatename':
            return { ...state, name: action.payload }
        case 'updatsource':
            return { ...state, source: action.payload }
        case 'updatedis':
            return { ...state, disgination: action.payload }
        case 'updatestart':
            return { ...state, startdate: action.payload }
            case 'updateend':
                return { ...state, enddate: action.payload }
        default:
            return state
    }
}
function main(state=[],action){
    switch (action.type) {
        case "Add":
           return[...state,{id:action.payload.id,
            name:action.payload.name,
            source:action.payload.source,
            des:action.payload.disgination,

           
            
             }]
        default:
          return state
     }
}

let haresh=combineReducers({
    nanis:Bank,
    accounts:main
})
let mahesh = createStore(haresh)
export default mahesh