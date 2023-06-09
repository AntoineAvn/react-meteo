import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg';
import './NavBar.css';

function NavBar(){
  return (
      <div className="banniere">
          <div>
              <img src={logo} className="img_logo" alt="logo" />
              <h1 className="titre">Bienvenue sur l'app météo</h1>
          </div>
          <div>
              <Link to="/"><button className="btn">Home</button></Link>
              <Link to="/search"><button className="btn">Recherche</button></Link>
              <Link to="/history"><button className="btn">Historique</button></Link>
          </div>
      </div>
  );
}

export default NavBar;