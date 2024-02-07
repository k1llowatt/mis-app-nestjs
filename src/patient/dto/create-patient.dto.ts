import { isEmail, maxLength, MaxLength } from 'class-validator'

export class CreatePatientDto {
  uuid: string

  //@maxLength(50, { message: 'Name must not exceed 50 characters' })
  name: string

  //@MaxLength(12, { message: 'Phone number must not exceed 12 characters' })
  phone: number

  //@isEmail()
  email: string

  //@MaxLength(6, { message: 'Gender must not exceed 6 characters' })
  gender: string
}
