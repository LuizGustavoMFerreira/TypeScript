///<reference path="hospital.ts" />

namespace medicina
{

    export class ProntoSocorro
    {

        private _codProntoSocorro:number;
        private _endereco:string;

        public setCodProntoSocorro(codProntoSocorro:number)
        {
            this._codProntoSocorro = codProntoSocorro;
        }

        public getCodProntoSocorro()
        {
            return this._codProntoSocorro;
        }

        public setEndereco(endereco:string)
        {
            this._endereco = endereco;
        }

        public getEndereco()
        {
            return this._endereco;
        }

    }

}