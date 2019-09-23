///<reference path="pessoa.ts" />
///<reference path="isetor.ts" />

namespace medicina
{

    export class Paciente extends Pessoa implements ISetor
    {

        private _codPaciente:number;
        private _setor:string;

        public setCodPaciente(codPaciente:number)
        {
            this._codPaciente = codPaciente;
        }

        public getCodPaciente()
        {
            return this._codPaciente;
        }

        setSetor(setor:string)
        {
            this._setor = setor;
        }

        mostrarSetor()
        {
            return "Seu setor: " + this._setor;
        }

    }

}