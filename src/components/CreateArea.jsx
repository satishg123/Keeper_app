import React, { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";


function CreateArea(props){

    const [isExpanded, setExpanded]=useState(false)
    const [note, setNote]=useState({
        title:"",
        content:""
    })

    function handleChange(event){
        const {name, value}=event.target
        setNote((prevValue)=>{
            return{
                ...prevValue, 
                [name]:value
                

            }
        })
    }

    function handleSubmit(event){
        props.onAdd(note);
        setNote(()=>{
            return {
                title:"",
                content:""
            }
        }
        );
        event.preventDefault();
        
    }

    function handleExpand(){
        setExpanded(true)
    }

    return <div>
    <form className="create-note">
    {isExpanded && <input onChange={handleChange} name="title" placeholder="Title" value={note.title} /> }
    <textarea onClick={handleExpand} onChange={handleChange} name="content" placeholder="Input a note..." value={note.content} rows={isExpanded?3:1}/>
    <Zoom in={isExpanded && true}><Fab onClick={handleSubmit}><AddIcon /></Fab></Zoom>
    </form>
    </div>
    
}

export default CreateArea;