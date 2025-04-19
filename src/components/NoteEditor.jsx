import { useState } from 'react';

const NoteEditor = ({ onSave }) => {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [references, setReferences] = useState('');
  const [lookup, setLookup] = useState('');

  const handleSave = () => {
    onSave({ title, note, references, lookup });
    setTitle('');
    setNote('');
    setReferences('');
    setLookup('');
  };

  return (
    <div className="note-editor">
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="title-input"
      />
      <textarea
        placeholder="Write your notes here..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="note-box"
      />
      <div className="extra-boxes">
        <textarea
          placeholder="Reference list"
          value={references}
          onChange={(e) => setReferences(e.target.value)}
        />
        <textarea
          placeholder="Items to look up"
          value={lookup}
          onChange={(e) => setLookup(e.target.value)}
        />
      </div>
      <button onClick={handleSave}>Save Note</button>
    </div>
  );
};

export default NoteEditor;
