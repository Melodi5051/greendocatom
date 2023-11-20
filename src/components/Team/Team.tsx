import React from "react"
import Member from "./Member"
import "./Team.css"

const arrayTeam: any = [
  {
    srcGit: "https://github.com/Melodi5051",
    gender: "male",
    name: "Наточин Артем",
    role: "Тимлид",
  },
  {
    srcGit: "https://github.com/AnMikhaylova",
    gender: "female",
    name: "Михайлова Анастасия",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/tankalxat34",
    gender: "male",
    name: "Подстречный Александр",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/AlexGusev19",
    gender: "male",
    name: "Гусев Александр",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/MblLLI16",
    gender: "male",
    name: "Строков Вячеслав",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/Anavuajna",
    gender: "female",
    name: "Грищенко Марина",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/n3trnnr",
    gender: "male",
    name: "Сердюк Алексей",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/Halababka",
    gender: "male",
    name: "Попов Илья",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/gramizor",
    gender: "male",
    name: "Гранин Михаил",
    role: "Разработчик",
  },
  {
    srcGit: "https://github.com/mariavoziyanova",
    gender: "female",
    name: "Возиянова Мария",
    role: "Разработчик",
  },
]

const Team = () => {
  return (
    <div className="team-container">
      <h1>Команда разработчиков №1</h1>
      <div className="members">
        {arrayTeam.forEach((el: any, index: number) => (
          <a
            href={el.srcGit}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="member-link"
          >
            <Member gender={el.gender} name={el.nane} role={el.role} />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Team
