import { Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt } from 'sequelize-typescript';
import { Goal } from './Goal';
import { TaskStatus } from '../interface/ICreateTask';

@Table({ tableName: 'tasks' })
export class Task extends Model<Task> {

  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: TaskStatus;

  @ForeignKey(() => Goal)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  goalId?: string;

  @BelongsTo(() => Goal)
  goal?: Goal;

  @CreatedAt
  @Column({
    type: DataType.DATE,
  })
  createdAt!: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
  })
  updatedAt!: Date;
}

