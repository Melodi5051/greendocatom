import React from 'react';
import './Registration.css'
import { Link } from 'react-router-dom'

const Registration = () => {
    return (
        <div className='registration-wrapper'>
            <nav>
                <Link to='/signup' >Регистрация</Link>
                <Link to='/signin' >Войти</Link>
            </nav>
        </div>
    );
}

export default Registration;