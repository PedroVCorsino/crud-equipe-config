import { Module } from '@nestjs/common';
import { FuncionariosController } from './funcionarios.controller';
import { FuncionarioService } from './shared/funcionario.service';

@Module({
    controllers: [FuncionariosController],
    providers: [FuncionarioService]
})
export class FuncionariosModule {}
