import express from 'express';
import AccountsController from '../controllers/accounts.controller';

const accountRouter = express.Router();
const accountsController = new AccountsController();

accountRouter.post('/', accountsController.create);
accountRouter.patch('/:id', accountsController.update);
accountRouter.delete('/:id', accountsController.delete);
accountRouter.get('/', accountsController.getAll);

export default accountRouter;
