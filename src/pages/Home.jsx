import NoteEditor from '../components/NoteEditor';
import NoteList from '../components/NoteList';
import NoteView from '../components/NoteView';

function Home() {
  return (
    <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <NoteList />
      <NoteEditor />
      <NoteView />
    </div>
  );
}

export default Home;
