import { useState } from 'react';
import NoteEditor from './components/NoteEditor';
import NoteList from './components/NoteList';
import NoteView from './components/NoteView';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleSaveNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="app">
      <NoteEditor onSave={handleSaveNote} />
      <NoteList notes={notes} onSelectNote={handleSelectNote} />
      <NoteView note={selectedNote} />
    </div>
  );
}

export default App;
