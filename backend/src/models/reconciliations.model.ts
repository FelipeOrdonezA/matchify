import BaseModel, { BaseProps } from './base.model';
import { Entity, Column, OneToMany } from 'typeorm';
import ReconciliationMovementModel from './reconciliationsMovements.model';

enum ReconciliationStatus {
  RECONCILED = 'reconciled',
  CANCELLED = 'cancelled',
}

interface ReconciliationProps extends BaseProps {
  status: ReconciliationStatus;
  totalBankAmount: number;
  totalAccountingAmount: number;
  notes: string;
}

@Entity('reconciliations')
class ReconciliationModel extends BaseModel {
  @Column({ type: 'enum', enum: ReconciliationStatus })
  status: ReconciliationStatus;
  @Column({ name: 'total_bank_amount' })
  totalBankAmount: number;
  @Column({ name: 'total_accounting_amount' })
  totalAccountingAmount: number;
  @Column({ nullable: true, length: 255 })
  notes: string;

  @OneToMany(
    () => ReconciliationMovementModel,
    (reconciliationMovement) => reconciliationMovement.reconciliation,
  )
  reconciliationMovements?: ReconciliationMovementModel[];

  constructor(props: ReconciliationProps) {
    super(props);
    this.status = props.status as ReconciliationStatus;
    this.totalBankAmount = props.totalBankAmount;
    this.totalAccountingAmount = props.totalAccountingAmount;
    this.notes = props.notes;
  }
}

export default ReconciliationModel;
