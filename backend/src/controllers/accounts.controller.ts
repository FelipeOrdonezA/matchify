import type { Request, Response, NextFunction } from 'express';
import type { CreateAccountDTO } from '../services/accounts.service';
import AccountsService from '../services/accounts.service';

class AccountsController {
  service: AccountsService;
  constructor() {
    this.service = new AccountsService();
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const accountData: CreateAccountDTO = request.body;
      await this.service.create(accountData);
      response.status(201).json({ message: 'Account created successfully' });
    } catch (error) {
      console.error(error);
      next(error);
    }
  }
  update() {}
  delete() {}
  getAll() {}
}

export default AccountsController;
