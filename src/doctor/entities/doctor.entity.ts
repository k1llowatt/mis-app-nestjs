import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Order } from '../../order/entities/order.entity'

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  @OneToMany(() => Order, (order) => order.doctor, { onDelete: 'CASCADE' })
  uuid: string

  @Column({ length: 50 })
  name: string

  @Column({ length: 100 })
  spec: string

  @Column()
  price: number
}
