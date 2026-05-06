import type { BaseProps } from './base.model';
import BaseModel from './base.model';
import { Entity, Column, ManyToOne, OneToOne, JoinColumn } from 'typeorm';
import MovementModel from './movements.model';
import ReconciliationModel from './reconciliations.model';

interface ReconciliationMovementProps extends BaseProps {
  reconciliationId: number;
  movementId: number;
  movementAmount: number;
}

@Entity('reconciliation_movements')
class ReconciliationMovementModel extends BaseModel {
  @Column({ name: 'reconciliation_id' })
  reconciliationId: number;

  @Column({ name: 'movement_id' })
  movementId: number;

  @Column({ name: 'movement_amount' })
  movementAmount: number;

  @ManyToOne(() => ReconciliationModel, (reconciliation) => reconciliation.reconciliationMovements)
  @JoinColumn({ name: 'reconciliation_id' })
  reconciliation?: ReconciliationModel;

  @OneToOne(() => MovementModel, (movement) => movement.reconcilationMovement)
  @JoinColumn({ name: 'movement_id' })
  movement?: MovementModel;

  constructor(props: ReconciliationMovementProps) {
    super(props);
    this.reconciliationId = props.reconciliationId;
    this.movementId = props.movementId;
    this.movementAmount = props.movementAmount;
  }
}

export default ReconciliationMovementModel;
