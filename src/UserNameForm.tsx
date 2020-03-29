import React, { useState, ChangeEvent, FormEvent } from 'react';

const UserNameForm = () => {
  const [input, setInput] = useState('');
  const [userName, setUserName] = useState('');
  const handleClick = () => {
    setUserName(input);
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
    setInput(event.target.value)
  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (<form onSubmit={handleSubmit}>
    <p>提交的内容: {userName}</p>
    <input placeholder="请在这里输入用户名" onChange={handleChange} />
    <button onClick={handleClick} value="提交"/>
  </form>)
};

export default UserNameForm;
