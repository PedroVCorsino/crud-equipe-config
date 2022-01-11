import { Injectable } from '@nestjs/common';
import { Funcionario } from './funcionario';

@Injectable()
export class FuncionarioService {
    funcionarios: Funcionario[] = [ 
        { id: 1, nome: 'Luiz', cargo: 'Lider' },
        { id: 2, nome: 'Laury', cargo: 'Desenvolvedor' },
        { id: 3, nome: 'Rafa', cargo: 'Desenvolvedor' },
        { id: 4, nome: 'Lucas', cargo: 'Desenvolvedor' },
        { id: 5, nome: 'Patricia', cargo: 'Analista' },
        { id: 6, nome: 'Pedro', cargo: 'Novato' },
    ];

    getAll(): Funcionario[] {
        return this.funcionarios;
    }

    getById(id: number): Funcionario {
        return this.funcionarios.find(f => f.id == id);
    }

    create(funcionario: Funcionario) {
        let ultimoId = 0;
        if (this.funcionarios.length > 0) {
            ultimoId = this.funcionarios[this.funcionarios.length - 1].id;
        }
        funcionario.id = this.funcionarios.length + 1;
        this.funcionarios.push(funcionario);

        return funcionario;
    }

    update(funcionario: Funcionario) {
        const funcionarioModificado = this.getById(funcionario.id);
        if (funcionarioModificado) {
            funcionarioModificado.nome = funcionario.nome;
            funcionarioModificado.cargo = funcionario.cargo;
        }

        return funcionarioModificado;
    }
    
    delete(id: number) {
        const index = this.funcionarios.findIndex(f => f.id == id);
        this.funcionarios.splice(index, 1);
    }

}
