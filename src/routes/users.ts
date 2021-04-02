import { Router } from 'express';
import { getAll, getById, create, updateInfoById, deleteById, getFiltered } from '../controllers/users';
import { userSchema, validateSchema } from '../middleware/userValidator';

const router = Router();

router.get('/', (req, res) => {
  const users = getAll();

  res.status(200).json({ message: 'All users', users });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const userInfo = getById(id);

  res.status(200).json({ message: `User ${userInfo.id}`, userInfo });
});

router.post('/', validateSchema(userSchema), (req, res) => {
  const { login, password, age } = req.query;
  const newUser = create(login, password, age);

  res.status(201).json({ message: 'Created new user', newUser });
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { login, password, age } = req.query;
  const userInfo = updateInfoById(id, login, password, age);

  res.status(200).json(
    {
      message: `Updated${login ? ' login' : ''}${password ? ' password' : ''}${age ? ' age' : ''} properties of user ${userInfo.id}`,
      userInfo
    }
  );
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const userInfo = deleteById(id);

  res.status(200).json({ message: `Deleted user ${userInfo.id}`, userInfo });
});

router.get('/:limit/:loginSubstring', (req, res) => {
  const { loginSubstring, limit } = req.params;
  const filteredUsers = getFiltered(loginSubstring, limit);

  res.status(200).json({ message: `${filteredUsers.length} users filtered by "${loginSubstring}"`, filteredUsers });
});

export { router };
