import NoTEContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props)=>{
 const s1 = {
    name:"hira",
    class:"yyy78"
 }
 const [state, setState] = useState(s1)




 const update =()=>{
    setTimeout(()=>{
     setState({
        name: "rida",
        class:"hhh6"
     })
    },4000)
 }


    return(
    <NoTEContext.Provider value={{state,update}}>
        {props.children}
    </NoTEContext.Provider>
    )
}
export default NoteState;