import React, { useState, ChangeEvent, FormEvent } from 'react';
import SkillSelect from '../components/SkillSelect';
import RegionSelect from '../components/RegionSelect';
import { Link, useHistory } from 'react-router-dom';

interface UserState {
  firstName: string,
  lastName: string,
  gender: string,
  grade: string,
  skill: string[],
  provience: string,
  city: string
}

const UserForm = () => {
  const history = useHistory();
  const skills = ['Java', 'JavaScript', 'C', 'C++', 'C#', 'Python'];
  const regions = [{
    provience: 'Shaan Xi',
    cities: ['Xi\'an', 'Xianyang', 'Baoji']
  }, {
    provience: 'Si Chuan',
    cities: ['Chengdu', 'Leshan', 'Mianyang', 'Guangyuan']
  }];

  const [user, setUser] = useState<UserState>({
    firstName: '',
    lastName: '',
    gender: 'male',
    grade: 'Grade 1',
    skill: [],
    provience: 'Shaan Xi',
    city: 'Xi\'an'
  });

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

  const handleChangeProvience = (event: ChangeEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      provience: event.target.value
    })
  };

  const handleChangeCity = (event: ChangeEvent<HTMLSelectElement>) => {
    setUser({
      ...user,
      city: event.target.value
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
    const storageUserList = JSON.parse(localStorage.getItem('userList') || '[]');
    storageUserList.push(user);
    localStorage.setItem('userList', JSON.stringify(storageUserList));
    history.push('/list');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Personal Info</h1>
        <div>
          <label>First Name:</label>
          <input required pattern="[a-zA-Z]+" onChange={handleChangeFirstName} />
        </div>
        <div>
          <label>Last Name:</label>
          <input required pattern="[a-zA-Z]+" onChange={handleChangeLastName} />
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input radioGroup="gender" type="radio" value="male" onClick={handleClickMale} checked={user.gender === 'male'} />
            Male
          </label>
          <label>
            <input radioGroup="gender" type="radio" value="female" onClick={handleClickFemale} checked={user.gender === 'female'} />
            Female
          </label>
        </div>
        <div>
          <label>Grade:</label>
          <select onChange={handleChangeGrade}>
            <option value="grade1" key="Grade 1">Grade 1</option>
            <option value="grade2" key="Grade 2">Grade 2</option>
            <option value="grade3" key="Grade 3">Grade 3</option>
          </select>
        </div>
        <div>
          <SkillSelect value={user.skill} skills={skills} handleChangeSkill={handleChangeSkill} />
        </div>
        <div>
          <RegionSelect regions={regions} provience={user.provience} handleChangeProvince={handleChangeProvience} handleChangeCity={handleChangeCity} />
        </div>
        <button type='submit'>提交</button>
      </form>
      <Link to="/list">Go to user list</Link>
    </>)
};

export default UserForm;
