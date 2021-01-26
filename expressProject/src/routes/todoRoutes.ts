import {Router, Request, Response} from 'express';
import {createTodo, getTodo, updateTodo, deleteTodo} from '../controllers/todos';

const router = Router();

router.post('/',createTodo);

router.get('/',getTodo);

router.put('/:id',updateTodo);

router.delete('/:id',deleteTodo);

export default router;