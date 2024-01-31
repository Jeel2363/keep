// App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx';

const App = () => {
  const getItem = () => {
    const Note = localStorage.getItem('notes');
    if (Note) {
      return JSON.parse(localStorage.getItem('notes'));
    }
    else {
      return [];
    }

  };
  const [addItem, setAddItem] = useState(getItem());
  const [darkMode, setDarkMode] = useState(false);


  // useEffect(() => {
  //   const notesFromLocalStorage = localStorage.getItem('notes');
  //   if (notesFromLocalStorage) {
  //     setAddItem(JSON.parse(notesFromLocalStorage));
  //   }
  // }, []); 

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(addItem));
  }, [addItem]); // Save notes to local storage whenever addItem changes

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const deleteNote = (id) => {
    setAddItem((olddata) =>
      olddata.filter((currdata, index) => {
        return index !== id;
      })
    );
  };

  const editNote = (id, updatedTitle, updatedContent) => {
    setAddItem((prevData) =>
      prevData.map((note, index) => {
        if (index === id) {
          return { ...note, title: updatedTitle, content: updatedContent };
        }
        return note;
      })
    );
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <>
      <div className={`container ${darkMode ? 'dark-mode' : ''}`}>
        <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <CreateNote passNote={addNote} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        {addItem.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem={deleteNote}
              editItem={editNote} // Pass the editItem function to Note
              toggleDarkMode={toggleDarkMode}
              darkMode={darkMode}
            />
          );
        })}
        <Footer toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
    </>
  );
};

export default App;
