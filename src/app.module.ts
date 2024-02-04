import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [ApiModule, DoctorModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
