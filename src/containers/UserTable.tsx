import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface UserState {
  firstName: string,
  lastName: string,
  gender: string,
  grade: string,
  skill: string[],
  provience: string,
  city: string
}

const UserTable = () => {
  const [userList, setUserList] = useState<UserState[]>([]);

  useEffect(() => {
    const storageUserList = JSON.parse(localStorage.getItem('userList') || '[]');
    setUserList(storageUserList);
  }, []);

  return <>{userList.map(user => (
    <table key={`${Math.random()}`}>
      <thead>
        <tr>
          <th>User Info</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>firstName</td>
          <td>{user.firstName}</td>
        </tr>
        <tr>
          <td>lastName</td>
          <td>{user.lastName}</td>
        </tr>
        <tr>
          <td>gender</td>
          <td>{user.gender}</td>
        </tr>
        <tr>
          <td>grade</td>
          <td>{user.grade}</td>
        </tr>
        <tr>
          <td>skill</td>
          <td>{user.skill.join(',')}</td>
        </tr>
        <tr>
          <td>provience</td>
          <td>{user.provience}</td>
        </tr>
        <tr>
          <td>city</td>
          <td>{user.city}</td>
        </tr>
      </tbody>
    </table>
  ))}
    <Link to="/">Go to create user</Link>
  </>;
};

export default UserTable;
