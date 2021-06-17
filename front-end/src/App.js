import React from 'react';
import './app.css';
import { Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
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
  if (!token) return <Redirect to="/" />;
  return props.children;
}

function App() {
  return (
    <>
      <AuthProvider>
        <CssBaseline />
        <Router>
          <Switch>
            <Route path='/cadastro' exact component={NewUser} />
            <Route path='/' exact component={Login} />
            <ProtectedRoutes>
              <div className='appContainer'>
                <NavBar />
                <div className='appContainer'>
                  <Route path='/produtos' exact component={Produtos} />
                  <Route path='/produtos/novo' exact component={NewProduct} />
                  <Route path='/produtos/editar' exact component={EditProduct} />
                  <Route path='/perfil' exact component={Profile} />
                  <Route path='/editar_perfil' exact component={EditProfile} />
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
