import React, { useState } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'
import storeAuthorization from '../../store/storeAuthorization'

const SignIn = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<string[]>([])

    const nav = useNavigate()

    const submit = (event: React.FormEvent) => {
        event.preventDefault()
        setErrors([])
        const error = []
        if (!login || login.length < 3 || login.length > 15 || !login.split('').some((i) => Number.isInteger(+i))) {
            error.push('Неверный логин!')
        }

        if (!password || password.length < 3 || password.length > 15) {
            error.push('Неверный пароль!')
        }

        if (!error.length && storeAuthorization.authentication(login, password)) {
            nav('/greendocatom')
        }
        setErrors([...error])
    }

    return (
        <div className='form-wrapper'>
            <div className="errors-wrapper">
                {errors && errors.map((error, id) => (
                    <div key={`errors_${id}`} className="error" >
                        {error}
                    </div>
                ))}
            </div>
            <form onSubmit={(event: React.FormEvent) => submit(event)} className='sing-in-form'>
                <label htmlFor="login">
                    Логин
                    <input type="text" placeholder='Логин...' id='login' onChange={(event) => setLogin(event.target.value)} />
                </label>
                <label htmlFor="password">
                    Пароль
                    <input type="password" placeholder='Пароль...' id='password' onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button className='sign-in-btn'>Войти</button>
                <Link to='/' className='btn-back'>Назад</Link>
            </form>
        </div>
    );
}

export default SignIn;