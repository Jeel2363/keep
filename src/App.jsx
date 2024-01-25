// App.jsx

import React, { useState } from 'react';
import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CreateNote from './CreateNote.jsx';
import Note from './Note.jsx';

const App = () => {
  const [addItem, setAddItem] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

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

  const editNote = (id, updatedtitle,updatedContent) => {
    setAddItem((prevData) =>
      prevData.map((note, index) => {
        if (index === id) {
          return { ...note, title:updatedtitle,content: updatedContent };
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
