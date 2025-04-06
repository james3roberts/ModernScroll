const NoteView = ({ note }) => {
    if (!note) {
      return <div className="note-view">Select a note to view</div>;
    }
  
    return (
      <div className="note-view">
        <h2>{note.title}</h2>
        <p>{note.content}</p>
      </div>
    );
  };
  
  export default NoteView;
  