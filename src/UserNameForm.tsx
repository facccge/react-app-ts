import React, { useState, ChangeEvent, FormEvent } from 'react';

const UserNameForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    gender: 'male'
  });

  const handleClick = () => {
    alert(`${user.firstName} ${user.lastName} ${user.gender}`);
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
        <input type="radio" value="male" onClick={handleClickMale} checked={user.gender==='male'} />
            Male
          </label>
      <label>
        <input type="radio" value="female" onClick={handleClickFemale} checked={user.gender==='female'} />
            Female
          </label>
    </div>
    <button onClick={handleClick}>提交</button>
  </form>)
};

export default UserNameForm;
