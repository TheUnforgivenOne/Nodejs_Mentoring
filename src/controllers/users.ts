/* eslint-disable no-unused-vars */
import { User } from '../types/User';
import { byAlphabet } from '../utils/utils';

export const users: User[] = [
  { id: '1', login: 'user1', password: '123', age: 23, isDeleted: false }
];

export const getAll = (req, res) => {
  res.status(200).json({ message: 'All users', users });
};

export const getById = (req, res) => {
  const id = req.params.id;
  const userInfo = users.find((user) => user.id === id);

  res.status(200).json({ message: `User ${userInfo.id}`, userInfo });
};

export const create = (req, res) => {
  const { login, password, age } = req.query;
  const newUser: User = {
    id: '2',
    login: String(login),
    password: String(password),
    age: Number(age),
    isDeleted: false
  };
  users.push(newUser);

  res.status(201).json({ message: 'Created new user', newUser });
};

export const updateInfoById = (req, res) => {
  const id = req.params.id;
  const { login, password, age } = req.query;
  const userInfo = users.find((user) => user.id === id);

  login && Object.assign(userInfo, { login });
  password && Object.assign(userInfo, { password });
  age && Object.assign(userInfo, { age });

  res.status(200).json(
    {
      message: `Updated${login ? ' login' : ''}${password ? ' password' : ''}${age ? ' age' : ''} properties of user ${userInfo.id}`,
      userInfo
    }
  );
};

export const deleteById = (req, res) => {
  const id = req.params.id;
  const userInfo = users.find((user) => user.id === id);
  userInfo.isDeleted = true;

  res.status(200).json({ message: `Deleted user ${userInfo.id}`, userInfo });
};

export const getFiltered = (req, res) => {
  const { loginSubstring, limit } = req.params;
  const filteredUsers = users.slice(0, limit).filter((user) => user.login.substring(loginSubstring)).sort(byAlphabet);

  res.status(200).json({ message: `${filteredUsers.length} users filtered by "${loginSubstring}"`, filteredUsers });
};
