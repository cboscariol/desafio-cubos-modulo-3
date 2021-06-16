import React from 'react';
import './app.css';
import { Route, BrowserRouter as Router, Link, Redirect, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Login from './components/Login'
import NewUser from './components/NewUser'
import NewProduct from './components/NewProduct'
import EditProduct from './components/EditProduct'
import Profile from './components/Profile'
import EditProfile from './components/EditProfile'
import Produtos from './components/Products';
import NavBar from './components/NavBar';
import { AuthProvider } from './context/AuthContext';
import useAuth from "./hook/useAuth";

function ProtectedRoutes(props) {
  const { token } = useAuth();
  if (!token) return <Redirect to="/login" />;
  return props.children;
}

function App() {
  return (
    <>
      <AuthProvider>
        <CssBaseline />
        <Router>
          <nav>
            <Link to='/cadastro'> Cadastro </Link>
            <Link to='/produtos/novo'> Novo Produto </Link>
            <Link to='/editar_produto'> Editar Produto </Link>
            <Link to='/perfil'> Perfil </Link>
            <Link to='/editar_perfil'> Editar Perfil </Link>
            <Link to='/produtos'> Produtos </Link>
            <Link to='/'> Login </Link>
          </nav>

          <Switch>
            <Route path='/cadastro' exact component={NewUser} />
            <Route path='/' exact component={Login} />
            <ProtectedRoutes>
              <div className='appContainer'>
                <NavBar />
                <div className='appContainer'>
                  <Route path='/produtos/novo' exact component={NewProduct} />
                  <Route path='/editar_produto' exact component={EditProduct} />
                  <Route path='/perfil' exact component={Profile} />
                  <Route path='/editar_perfil' exact component={EditProfile} />
                  <Route path='/produtos' exact component={Produtos} />
                </div>
              </div>
            </ProtectedRoutes>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
