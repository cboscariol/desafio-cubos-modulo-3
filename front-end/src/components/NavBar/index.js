import React from 'react'
import './style.css';
import StoreSelected from './assets/store-selected.svg';
import Store from './assets/store.svg';
import User from './assets/user.svg';
import UserSelected from './assets/user-selected.svg';
import Close from './assets/close.svg';



function NavBar() {
    return (
        <div className='navBar'>
            <button> <img src={StoreSelected} alt="StoreSelected" /></button>
            <button> <img src={Store} alt="Store" /></button>
            <button> <img src={User} alt="User" /></button>
            <button> <img src={UserSelected}alt="UserSelected" /></button>
            <button> <img src={Close}alt="CloseButton" /></button>
        </div>
    )
}

export default NavBar
