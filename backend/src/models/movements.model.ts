import AccountsModel from './accounts.model';
import BaseModel, { BaseProps } from './base.model';
import { Entity, Column, OneToOne, ManyToOne, JoinColumn } from 'typeorm';
import ReconciliationMovementModel from './reconciliationsMovements.model';

enum MovementType {
  BANK = 'bank',
  ACCOUNTING = 'accounting',
}

interface MovementProps extends BaseProps {
  accountId: number;
  name: string;
  date: Date;
  type: MovementType;
  reference: string;
  amount: number;
  description: string;
}

@Entity('movements')
class MovementModel extends BaseModel {
  @Column({ name: 'account_id' })
  accountId: number;
  @Column()
  date: Date;
  @Column({ type: 'enum', enum: MovementType })
  type: MovementType;
  @Column()
  reference: string;
  @Column()
  amount: number;
  @Column()
  description: string;
  @ManyToOne(() => AccountsModel, (account) => account.movements)
  @JoinColumn({ name: 'account_id' })
  account?: AccountsModel;
  @OneToOne(
    () => ReconciliationMovementModel,
    (reconciliationMovement) => reconciliationMovement.movement,
  )
  reconcilationMovement?: ReconciliationMovementModel;

  constructor(props: MovementProps) {
    super(props);
    this.accountId = props.accountId;
    this.date = props.date;
    this.type = props.type;
    this.reference = props.reference;
    this.amount = props.amount;
    this.description = props.description;
  }
}

export default MovementModel;
