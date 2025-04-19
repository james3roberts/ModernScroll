import { useNavigate } from "react-router-dom";

function Home (){
  const navigate = useNavigate();

  return(
    <div className="home-container">
      <h1>Welcome to ModernScroll</h1>
      <button onClick = {()=> navigate('/setup')}>First-Time Setup</button>
      <button onClick = {()=> navigate ('/new')}>Create New Note</button>
      <button onClick = {()=> navigate ('/notes')}>View Saved Notes</button>
      <button disabled> AI summary(Comming Soon)</button>
    </div>
  );
}

export default Home;