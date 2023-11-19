import React from 'react';
import MaleIcon from "../../assets/icons/icon-member-man.svg";
import FemaleIcon from "../../assets/icons/icon-member-woman.svg";
import './Member.css'

const Member = (props) => {
    const { gender, name, role, github } = props;
    const avatarPath = gender === 'male' ? MaleIcon : FemaleIcon;

    return (
        <div className="card-container">
            <img src={avatarPath} alt="" className="avatar" />
            <div className='block'>
                <div className="name">
                    {name}
                </div>
                <div className="role">
                    {role}
                </div>
            </div>
            <div className="github">
                {github}
            </div>
        </div>
    );
};

export default Member;