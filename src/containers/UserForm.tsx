import React, { useState, ChangeEvent, FormEvent } from 'react';
import SkillSelect from '../components/SkillSelect';

interface UserState {
  firstName: string,
  lastName: string,
  gender: string,
  grade: string,
  skill: string[]
}

const UserForm = () => {
  const skills = ['Java', 'JavaScript', 'C', 'C++', 'C#', 'Python'];

  const [user, setUser] = useState<UserState>({
    firstName: '',
    lastName: '',
    gender: 'male',
    grade: 'grade1',
    skill: []
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
    const skill = user.skill;
    const index = skill.indexOf(selectedSkill);
    if (index >= 0) {
      skill.splice(index, 1);
      setUser({
        ...user,
        skill
      });
    } else {
      setUser({
        ...user,
        skill: skill.concat(selectedSkill)
      });
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
      <SkillSelect value={user.skill} skills={skills} handleChangeSkill={handleChangeSkill} />
    </div>
    <button onClick={handleClick}>提交</button>
  </form>)
};

export default UserForm;
