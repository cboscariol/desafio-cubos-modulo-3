import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import NewUser from './components/NewUser'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'


function App() {
  return (
    <div>
      <Router>
        <nav>
        < Link to='/login'> Login </Link>
        < Link to='/cadastro'> Cadastro </Link>
        < Link to='/novoProduto'> Novo Produto </Link>
        < Link to='/editarProduto'> Editar Produto </Link>
        </nav>
        <Route path='/login'component={Login} />
        <Route path='/cadastro'component={NewUser} />
        <Route path='/novoProduto'component={NewProduct} />
        <Route path='/editarProduto'component={EditProduct} />


      </Router>
    </div>
  );
}

export default App;
