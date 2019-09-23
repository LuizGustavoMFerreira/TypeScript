///<reference path="enfermeiro.ts" />
///<reference path="medico.ts" />
///<reference path="paciente.ts" />
///<reference path="prontoSocorro.ts" />

namespace medicina
{

    export class Hospital
    {

        private _nome:string;
        private _enfermeiros:Array<Enfermeiro> = [];
        private _medicos:Array<Medico> = [];
        private _pacientes:Array<Paciente> = [];
        private _prontoSocorro:Array<ProntoSocorro> = [];

        public setNome(nome:string)
        {
            this._nome = nome;
        }

        public getNome()
        {
            return this._nome;
        }

        public addEnfermeiros(enfermeiro:Enfermeiro)
        {
            this._enfermeiros.push(enfermeiro);
        }

        public getEnfermeiros()
        {
            return this._enfermeiros;
        }

        public addMedicos(medico:Medico)
        {
            this._medicos.push(medico);
        }

        public getMedicos()
        {
            return this._medicos;
        }

        public addPacientes(paciente:Paciente)
        {
            this._pacientes.push(paciente);
        }

        public getPacientes()
        {
            return this._pacientes;
        }

        public addProntoSocorros(prontoSocorro:ProntoSocorro)
        {
            this._prontoSocorro.push(prontoSocorro);
        }

        public getProntoSocorros()
        {
            return this._prontoSocorro;
        }


    }

}