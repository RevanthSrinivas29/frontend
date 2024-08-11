import {useState} from "react"
export const Event=() =>{
    const [setName]=useState()
     const  changename =() =>{
        setName("Revanth")
        alert("Check")
        console.log("Working")
     }
     const rev= () =>{
     return(
        <div>
            <button onClick={() =>changename()}>onClick</button>
            <button onClickCapture={() =>changename()}>onClickCapture</button>
            <button onDoubleClick={() =>changename()}>onDoubleClick</button>
            <button onMouseOver={() =>changename()}>onMouseOver</button>
        </div>
     )
    }}
