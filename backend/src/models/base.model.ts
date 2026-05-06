import { Column } from 'typeorm';

export interface BaseProps {
  id: number;
  createdAt: Date;
  updateAt: Date;
  companyId?: number;
}

class BaseModel {
  @Column({ primary: true, generated: 'increment' })
  id: number;
  @Column({ name: 'created_at' })
  createdAt: Date;
  @Column({ name: 'updated_at' })
  updateAt: Date;
  @Column({ name: 'company_id', nullable: true, type: 'uuid' })
  companyId?: number;
  constructor(props: BaseProps) {
    this.id = props.id;
    this.createdAt = props.createdAt;
    this.updateAt = props.updateAt;
    this.companyId = props.companyId;
  }
}

export default BaseModel;
