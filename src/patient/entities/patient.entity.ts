import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { randomUUID } from "crypto";


@Entity()
export class Patient {
  @PrimaryGeneratedColumn()
  //@randomUUID()
  uuid: string;

  @Column({length: 50})
  name: string;

  @Column()
  phone: number;

  @Column({length: 100})
  email: string;

  @Column({length: 10})
  gender: string

}
