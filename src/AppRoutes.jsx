import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Setup from './pages/Setup';
import NewNote from './pages/NewNote';
import NoteList from './pages/NoteList';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ setup" element={<Setup />} />
                <Route path="/new" element={<NewNote />} />
                <Route path ="/notes" element={<NoteList />}/>
            </Routes>
        </Router>
    );
}
export default AppRoutes;