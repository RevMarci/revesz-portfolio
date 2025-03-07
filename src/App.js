//import logo from './logo.svg';
import './App.css';
import './style/Button.css';
import './style/Card.css';
import Button from './Components/Button';
import ProjektCard from './Components/ProjectCard';

function App() {
  return (
    <div className="main">
      <p>Alma</p>
      <Button />
      <ProjektCard number={1}/>
      <ProjektCard number={2}/>
      <ProjektCard number={3}/>
    </div>
  );
}

export default App;
