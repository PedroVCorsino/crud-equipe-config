import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Funcionario } from './shared/funcionario';
import { FuncionarioService } from './shared/funcionario.service';

@Controller('funcionarios')
export class FuncionariosController {

    constructor(private funcionarioService: FuncionarioService) { }

    @Get()
    async getAll() : Promise<Funcionario[]> {
        return this.funcionarioService.getAll();
    }

    @Get('/:id')
    async getById(@Param('id') id: number) : Promise<Funcionario> {
        return this.funcionarioService.getById(id);
    }

    @Post()
    async create(@Body()funcionario : Funcionario) : Promise<Funcionario> {
        return this.funcionarioService.create(funcionario);
    }

    @Put('/:id')
    async update(@Param('id') id: number, @Body() funcionario: Funcionario) : Promise<Funcionario> {
        funcionario.id = id;
        return this.funcionarioService.update(funcionario);
    }


    @Delete('/:id')
    async delete(@Param('id') id: number) {
        return this.funcionarioService.delete(id);
    }

}
