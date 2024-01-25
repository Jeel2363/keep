import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Add from '@mui/icons-material/Add';
import './CreateNote.css'; 

const CreateNote = (props) => {

    const [expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {

        const {name, value} = event.target;

        setNote((prevData) =>{
            return {
                ...prevData,
                [name]: value,
            };
        });

        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    
    };
 
    const expandIt = () => {
        setExpand(true);
    };

    const normal = () => {
        setExpand(false);
    };


    return (
        <>
            <div className='create-note'>
                <form>
                    {expand?
                    <input 
                        className='note-input'
                        name="title" 
                        value={note.title} 
                        onChange={InputEvent} 
                        type='text' 
                        placeholder='Title' 
                        autoComplete='off' 
                        onDoubleClick={normal}
                        />
                    :null}
                    <textarea 
                        className='note-textarea' 
                        column=''
                        rows='5' 
                        name="content" 
                        value={note.content} 
                        onChange={InputEvent} 
                        placeholder='Write your note...' 
                        onClick={expandIt}
                        onDoubleClick={normal}
                        />
                    {expand?
                    <Button onClick={addEvent} className='note-button'>
                        <Add className='plus' />
                    </Button>
                    :null}
                </form>
            </div>
        </>
    );
};

export default CreateNote;
