import React, { useState, ChangeEvent, FormEvent } from 'react';
import './UserNameForm.css';

const UserNameForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    gender: 'male',
    grade: 'grade1',
    skill: ''
  });

  const handleClick = () => {
    alert(`${user.firstName} ${user.lastName} ${user.gender} ${user.grade} ${user.skill}`);
  };

  const handleChangeFirstName = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      firstName: event.target.value
    })
  };

  const handleChangeLastName = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      lastName: event.target.value
    })
  };

  const handleChangeGrade = (event: ChangeEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      grade: event.target.value
    })
  };

  const handleChangeSkill = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedSkill = event.target.value;
    if (user.skill === '') {
      setUser({
        ...user,
        skill: selectedSkill
      })
    } else {
      const skillArray = user.skill.split(';');
      if (skillArray.includes(selectedSkill)) {
        const index = skillArray.indexOf(selectedSkill);
        if (index > -1) {
          skillArray.splice(index, 1);
        }
        setUser({
          ...user,
          skill: skillArray.join(';')
        })
      } else {
        skillArray.push(selectedSkill);
        setUser({
          ...user,
          skill: skillArray.join(';')
        })
      }
    }
  };

  const handleClickMale = () => {
    setUser({
      ...user,
      gender: 'male'
    })
  };

  const handleClickFemale = () => {
    setUser({
      ...user,
      gender: 'female'
    })
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (<form onSubmit={handleSubmit}>
    <h1>Personal Info</h1>
    <div>
      <label>First Name:</label>
      <input onChange={handleChangeFirstName} />
    </div>
    <div>
      <label>Last Name:</label>
      <input onChange={handleChangeLastName} />
    </div>
    <div>
      <label>Gender:</label>
      <label>
        <input type="radio" value="male" onClick={handleClickMale} checked={user.gender === 'male'} />
            Male
          </label>
      <label>
        <input type="radio" value="female" onClick={handleClickFemale} checked={user.gender === 'female'} />
            Female
          </label>
    </div>
    <div>
      <label>Grade:</label>
      <select onChange={handleChangeGrade}>
        <option value="grade1">Grade 1</option>
        <option value="grade2">Grade 2</option>
        <option value="grade3">Grade 3</option>
      </select>
    </div>
    <div>
      <label>Skill:</label>
      <input className="skill" value={user.skill} />
      <select onChange={handleChangeSkill} multiple>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="C">C</option>
        <option value="C++">C++</option>
        <option value="C#">C#</option>
      </select>
    </div>
    <button onClick={handleClick}>提交</button>
  </form>)
};

export default UserNameForm;
