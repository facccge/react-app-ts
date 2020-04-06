import React, { useState, ChangeEvent, FormEvent } from 'react';

const UserNameForm = () => {
  const [user, setUser] = useState({
    firstName: '',
    lastName: ''
  });

  const handleClick = () => {
    alert(`${user.firstName} ${user.lastName}`);
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
    <button onClick={handleClick}>提交</button>
  </form>)
};

export default UserNameForm;
