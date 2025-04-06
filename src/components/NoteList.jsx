const NoteList = ({ notes, onSelectNote }) => {
    return (
      <div className="note-list">
        <h2>Notes</h2>
        {notes.length > 0 ? (
          <ul>
            {notes.map((note, index) => (
              <li key={index} onClick={() => onSelectNote(note)}>
                {note.title}
              </li>
            ))}
          </ul>
        ) : (
          <p>No notes available</p>
        )}
      </div>
    );
  };
  
  export default NoteList;
  