import { BadRequestException, Injectable } from '@nestjs/common'
import { CreatePatientDto } from './dto/create-patient.dto'
import { UpdatePatientDto } from './dto/update-patient.dto'
import { InjectRepository } from '@nestjs/typeorm'
import { Patient } from './entities/patient.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PatientService {
  constructor(
    @InjectRepository(Patient)
    private readonly userRepository: Repository<Patient>,
  ) {}
  async create(createPatientDto: CreatePatientDto) {
    const existPatient = await this.userRepository.findOne({
      where: {
        email: createPatientDto.email,
      },
    })
    if (existPatient)
      throw new BadRequestException('This patient already exist!')
    const patient = await this.userRepository.save({
      email: createPatientDto.email,
    })

    return 'This action adds a new patient'
  }

  findAll() {
    return `Patient API`
  }

  findOne(id: number) {
    return `This action returns a #${id} patient`
  }

  update(id: number, updatePatientDto: UpdatePatientDto) {
    return `This action updates a #${id} patient`
  }

  remove(id: number) {
    return `This action removes a #${id} patient`
  }
}
