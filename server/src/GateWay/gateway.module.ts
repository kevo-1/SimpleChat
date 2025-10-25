import { Module } from '@nestjs/common';
import { gatewayHandler } from './gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [gatewayHandler],
})
export class GateWayModule {}
