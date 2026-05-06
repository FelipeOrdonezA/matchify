import type { Repository } from 'typeorm';
import type { AccountsModel } from '../models';

export interface CreateAccountDTO {
  code: string;
  name: string;
  description?: string;
  bank?: number;
  number?: string;
}

class AccountsService {
  constructor(private readonly repository: Repository<AccountsModel>) {}

  async create(account: CreateAccountDTO) {
    this.repository.create(account);
  }
  update() {}
  delete() {}
  getAll() {}
}

export default AccountsService;
