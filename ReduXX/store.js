import { legacy_createStore } from "redux";
import { reduceR } from "./reducer";


export const LovanyaData=legacy_createStore(reduceR)

// data=createContext()
// data.Provider value={[1,2,3,4]}
