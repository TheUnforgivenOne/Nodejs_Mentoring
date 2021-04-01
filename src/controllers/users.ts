/* eslint-disable no-unused-vars */
import { v4 as newId } from 'uuid';
import { User } from '../types/User';
import { byAlphabet } from '../utils/utils';

export const users: User[] = [
  { id: '892829ff-71f5-4618-8fb4-9a7b945c0550', login: 'user3', password: '123', age: 23, isDeleted: false },
  { id: '3e9e0d48-aecd-41e9-8f19-165252807552', login: 'user1', password: '123', age: 18, isDeleted: false },
  { id: 'a90aa1d7-abc5-43f2-b915-07c9d6677281', login: 'user2', password: '123', age: 34, isDeleted: false }
];

export const getAll = () => {
  return users;
};

export const getById = (id) => {
  return users.find((user) => user.id === id);
};

export const create = (login, password, age) => {
  const newUser: User = {
    id: newId(),
    login: String(login),
    password: String(password),
    age: Number(age),
    isDeleted: false
  };
  users.push(newUser);

  return newUser;
};

export const updateInfoById = (id, login, password, age) => {
  const userInfo = users.find((user) => user.id === id);

  login && Object.assign(userInfo, { login: String(login) });
  password && Object.assign(userInfo, { password: String(password) });
  age && Object.assign(userInfo, { age: Number(age) });

  return userInfo;
};

export const deleteById = (id) => {
  const userInfo = users.find((user) => user.id === id);
  userInfo.isDeleted = true;

  return userInfo;
};

export const getFiltered = (loginSubstring, limit) => {
  return users.slice(0, limit).filter((user) => user.login.substring(loginSubstring)).sort(byAlphabet);
};
