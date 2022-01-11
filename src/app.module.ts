import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FuncionariosController } from './funcionarios/funcionarios.controller';
import { FuncionarioService } from './funcionarios/shared/funcionario.service';
import { FuncionariosModule } from './funcionarios/funcionarios.module';

@Module({
  imports: [FuncionariosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
