import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import storeAuthorization from '../../store/storeAuthorization'

const SignUp = () => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [email, setEmail] = useState<string>('')
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

        if (!email) {
            error.push('Неверный Email!')
        }

        if (!error.length) {
            const user = {
                login: login,
                password: password,
                email: email
            }
            storeAuthorization.createUser(user)
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
            <form className='sing-up-form' onSubmit={(event: React.FormEvent) => submit(event)}>
                <label htmlFor="login">
                    Логин
                    <input type="text" placeholder='Логин...' id='login' onChange={(event) => setLogin(event.target.value)} />
                </label>
                <label htmlFor="password">
                    Пароль
                    <input type="password" placeholder='Пароль...' id='password' onChange={(event) => setPassword(event.target.value)} />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="email" placeholder='Email...' id='email' onChange={(event) => setEmail(event.target.value)} />
                </label>
                <button className='sign-up-btn'>Зарегистрироваться</button>
                <Link className='btn-back' to='/'>Назад</Link>
            </form>
        </div>
    );
}

export default SignUp;