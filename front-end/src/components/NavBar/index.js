import React, { useState } from 'react'
import './style.css';
import StoreSelected from './assets/store-selected.svg';
import Store from './assets/store.svg';
import User from './assets/user.svg';
import UserSelected from './assets/user-selected.svg';
import Close from './assets/close.svg';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hook/useAuth';




function NavBar() {
	const { deslogar } = useAuth();
	const history = useHistory();
	const [reRenders, setRerenders] = useState(0)

	const handleClick = (type) => {
		setRerenders(reRenders + 1)
		if (type === 'produtos') {
			return history.push('/produtos')
		}

		if (type === 'perfil') {
			return history.push('/perfil')
		}

		if (type === 'sair') {
			history.push('/');
			return deslogar()
		}
	}

	const showButtonHome = () => {
		if (history.location.pathname.includes('produto')) {
			return <img src={StoreSelected} alt="StoreSelected" />
		} else {
			return <img className='noSelected' src={Store} alt="Store" />
		}
	}

	const showButtonPerfil = () => {
		if (history.location.pathname.includes('perfil')) {
			return <img src={UserSelected} alt="UserSelected" />
		} else {
			return <img className='noSelected' src={User} alt="User" />
		}
	}

	return (
		<div className='navBar'>
			<div className='navBarAuxiliar'>
				<button onClick={() => handleClick('produtos')}>{showButtonHome()}</button>
				<button onClick={() => handleClick('perfil')}>{showButtonPerfil()}</button>
				<button onClick={() => handleClick('sair')}> <img src={Close} alt="CloseButton" /></button>
			</div>
		</div>
	)
}

export default NavBar
