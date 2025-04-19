import { useState } from 'react';
import SetupScreen from './components/SetupScreen';
import NoteEditor from './components/NoteEditor';

function App() {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const [setupData, setSetupData] = useState(null);

  const handleFinishSetup = (data) => {
    setSetupData(data);
    setIsSetupComplete(true);
  };

  return (
    <div className="app-container">
      {!isSetupComplete ? (
        <SetupScreen onFinishSetup={handleFinishSetup} />
      ) : (
        <div>
          <h1>{setupData?.churchName} - Notes</h1>
          <NoteEditor onSave={(note) => console.log('Saved note:', note)} />
        </div>
      )}
    </div>
  );
}

export default App;
