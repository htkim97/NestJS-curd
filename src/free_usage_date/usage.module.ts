import { Module } from '@nestjs/common';
import { UsageController } from './usage.controller';
import { usageService } from './usage.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { usageRepository } from './usage.repository';
import { Usage } from './usage.entity'; // Point_b 엔터티를 가져옴

@Module({
  imports: [TypeOrmModule.forFeature([Usage])],
  controllers: [UsageController],
  providers: [usageService, usageRepository]
})


export class UsageModule {}
