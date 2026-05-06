import BaseModel, { BaseProps } from './base.model';
import { Entity, Column, OneToMany } from 'typeorm';
import MovementModel from './movements.model';

interface AccountsProps extends BaseProps {
  code: string;
  name: string;
  description?: string;
  bank?: number;
  number?: string;
}

@Entity('accounts')
class AccountsModel extends BaseModel {
  @Column({ length: 50 })
  code: string;
  @Column({ length: 100 })
  name: string;
  @Column({ nullable: true, length: 255 })
  description?: string;
  @Column({ nullable: true })
  bank?: number;
  @Column({ nullable: true, length: 50 })
  number?: string;
  @OneToMany(() => MovementModel, (movement) => movement.account)
  movements?: MovementModel[];

  constructor(props: AccountsProps) {
    super(props);
    this.code = props.code;
    this.name = props.name;
    this.description = props.description;
    this.bank = props.bank;
    this.number = props.number;
  }
}

export default AccountsModel;
