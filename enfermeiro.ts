///<reference path="funcionario.ts" />
///<reference path="isetor.ts" />

namespace medicina
{

    export class Enfermeiro extends Funcionario implements ISetor
    {

        private _coren:number;
        private _setor:string;

        public setCoren(coren:number)
        {
            this._coren = coren;
        }

        public getCoren()
        {
            return this._coren;
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