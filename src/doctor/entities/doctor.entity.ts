import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  uuid: string

  @Column({length: 50})
  name: string

  @Column({length: 100})
  spec: string

  @Column()
  price: number
}
