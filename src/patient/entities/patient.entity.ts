import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Order } from '../../order/entities/order.entity'

@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Order, (order) => order.patient, { onDelete: 'CASCADE' })
  uuid: string

  @Column({ length: 50 })
  name: string

  @Column()
  phone: number

  @Column({ length: 100 })
  email: string

  @Column({ length: 10 })
  gender: string
}
