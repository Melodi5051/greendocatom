import MaleIcon from "../../assets/icons/icon-member-man.svg"
import FemaleIcon from "../../assets/icons/icon-member-woman.svg"
import "./Member.css"
interface IProps {
  gender: string
  name: string
  role: string
}

const Member = ({ gender, name, role }: IProps) => {
  const avatarPath = gender === "male" ? MaleIcon : FemaleIcon

  return (
    <div className="card-container">
      <img src={avatarPath} alt="" className="avatar" />
      <div className="block">
        <div className="name">{name}</div>
        <div className="role">{role}</div>
      </div>
    </div>
  )
}

export default Member
