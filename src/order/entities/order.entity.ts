import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Doctor } from '../../doctor/entities/doctor.entity'
import { Patient } from '../../patient/entities/patient.entity'

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  uuid: string

  @ManyToOne(() => Doctor, (doctor) => doctor.uuid)
  doctor: Doctor

  @ManyToOne(() => Patient, (patient) => patient.uuid)
  patient: Patient

  @Column()
  date: string

  @Column()
  time_from: string

  @Column()
  time_to: string

  @Column()
  isFree: boolean

  @Column()
  type: number
}
