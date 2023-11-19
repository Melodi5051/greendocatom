import React from 'react';
import Member from './Member.jsx';
import './Team.css';

const Team = () => {
    return (
        <div className="team-container">
            <h1>Команда разработчиков №1</h1>
            <div className='members'>
                <a href="https://github.com/Melodi5051" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="male" name="Наточин Артем" role="Тимлид" />
                </a>
                <a href="https://github.com/AnMikhaylova" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="female" name="Михайлова Анастасия" role="Разработчик" />
                </a>
                <a href="https://github.com/tankalxat34" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="male" name="Подстречный Александр" role="Разработчик" />
                </a>
                <a href="https://github.com/AlexGusev19" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="male" name="Гусев Александр" role="Разработчик" />
                </a>
                <a href="https://github.com/MblLLI16" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="male" name="Строков Вячеслав" role="Разработчик" />
                </a>
                <a href="https://github.com/Anavuajna" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="female" name="Грищенко Марина" role="Разработчик" />
                </a>
                <a href="https://github.com/n3trnnr" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="male" name="Сердюк Алексей" role="Разработчик" />
                </a>
                <a href="https://github.com/Halababka" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="male" name="Попов Илья" role="Разработчик" />
                </a>
                <a href="https://github.com/gramizor" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="male" name="Гранин Михаил" role="Разработчик" />
                </a>
                <a href="https://github.com/mariavoziyanova" target="_blank" rel="noopener noreferrer" className="member-link">
                    <Member gender="female" name="Возиянова Мария" role="Разработчик" />
                </a>
            </div>
        </div>
    );
};

export default Team;
