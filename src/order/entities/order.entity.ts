import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {

  @PrimaryGeneratedColumn()
  uuid: string

  @Column()
  doctor_id: string

  @Column()
  patient_id: string

  @Column()
  date: string

  @Column()
  time_from: string

  @Column()
  time_to: string

  @Column()
  isFree:boolean

  @Column()
  type: number

}
