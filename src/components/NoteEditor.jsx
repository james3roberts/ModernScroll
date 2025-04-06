import { useState } from 'react';

const NoteEditor = ({ onSave }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');

  const handleSave = () => {
    if (noteTitle && noteContent) {
      onSave({ title: noteTitle, content: noteContent });
      setNoteTitle('');
      setNoteContent('');
    }
  };

  return (
    <div className="note-editor">
      <h1>Modern Scroll</h1>
      <h2> Welcome to this week's sermon!</h2>
      <input
        type="text"
        placeholder="Note Title"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note here..."
        value={noteContent}
        onChange={(e) => setNoteContent(e.target.value)}
      />
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
};

export default NoteEditor;
