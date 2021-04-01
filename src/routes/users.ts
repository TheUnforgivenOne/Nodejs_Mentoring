import { Router } from 'express';
import { getAll, getById, create, updateInfoById, deleteById, getFiltered } from '../controllers/users';

const router = Router();

router.get('/', getAll);

router.get('/:id', getById);

router.post('/', create);

router.put('/:id', updateInfoById);

router.delete('/:id', deleteById);

router.get('/:limit/:loginSubstring', getFiltered);

export { router };
