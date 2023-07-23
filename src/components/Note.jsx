import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';

function Note(Props)
{
    function handleDelete()
    {
        Props.onDelete(Props.id);
    }
    return <div className="note">
        <h1>{Props.title}</h1>
        <p>{Props.content}</p>
        <button onClick={handleDelete}>
            <DeleteIcon />
        </button>
    </div>
}

export default Note;