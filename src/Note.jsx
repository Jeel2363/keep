import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import './Note.css';

const Note = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [editedContent, setEditedContent] = useState(props.content);

  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleEdit = () => {
    props.editItem(props.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  const handleInputChange = (event) => {
    if (event.target.name === 'title') {
      setEditedTitle(event.target.value);
    } else if (event.target.name === 'content') {
      setEditedContent(event.target.value);
    }
  };

  return (
    <>
      <div className="note">
        {isEditing ? (
            <input
            name='title'
            value={editedTitle}
            onChange={handleInputChange}
            />
        ) : (
        <h1>{props.title}</h1>
        )}
        {isEditing ? (
        
          <textarea
            rows="5"
            col="1"
            name="content"
            value={editedContent}
            onChange={handleInputChange}
          />
        ) : (
          <p>{props.content}</p>
        )}
        <div className="note-buttons">
          {isEditing ? (
            <button className="edit-button" onClick={handleEdit}>
              <SaveIcon className="edit" />
            </button>
          ) : (
            <button className="edit-button" onClick={toggleEdit}>
              <EditIcon className="edit" />
            </button>
          )}
          <button className="delbutton" onClick={deleteNote}>
            <DeleteOutlineIcon className="delete" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Note;
