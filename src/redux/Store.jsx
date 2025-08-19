import {configureStore} from "@reduxjs/toolkit"

import  Slicer   from "./Slice.jsx"

export const store = configureStore({
reducer:{
counter: Slicer 
}
})
export default store