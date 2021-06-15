import './app.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './components/Login'
import NewUser from './components/NewUser'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import Produtos from './components/Products';
import NavBar from './components/NavBar';



function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <nav>
        < Link to='/cadastro'> Cadastro </Link>
        < Link to='/novo_produto'> Novo Produto </Link>
        < Link to='/editar_produto'> Editar Produto </Link>
        < Link to='/perfil'> Perfil </Link>
        < Link to='/editar_perfil'> Editar Perfil </Link>
        < Link to='/produtos'> Produtos </Link>
        < Link to='/'> Login </Link>
        < Link to='/navi_bar'> Menu </Link>

        </nav>

        <Route path='/cadastro'component={NewUser} />
        <Route path='/novo_produto'component={NewProduct} />
        <Route path='/editar_produto'component={EditProduct} />
        <Route path='/perfil'component={Profile} />
        <Route path='/editar_perfil'component={EditProfile} />
        <Route path='/produtos'  component={Produtos} />
        <Route path='/' exact component={Login} />
        <Route path='/navi_bar' exact component={NavBar} />



      </Router>
    </>
  );
}

export default App;
