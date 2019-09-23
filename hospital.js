///<reference path="enfermeiro.ts" />
///<reference path="medico.ts" />
///<reference path="paciente.ts" />
///<reference path="prontoSocorro.ts" />
var medicina;
(function (medicina) {
    var Hospital = /** @class */ (function () {
        function Hospital() {
            this._enfermeiros = [];
            this._medicos = [];
            this._pacientes = [];
            this._prontoSocorro = [];
        }
        Hospital.prototype.setNome = function (nome) {
            this._nome = nome;
        };
        Hospital.prototype.getNome = function () {
            return this._nome;
        };
        Hospital.prototype.addEnfermeiros = function (enfermeiro) {
            this._enfermeiros.push(enfermeiro);
        };
        Hospital.prototype.getEnfermeiros = function () {
            return this._enfermeiros;
        };
        Hospital.prototype.addMedicos = function (medico) {
            this._medicos.push(medico);
        };
        Hospital.prototype.getMedicos = function () {
            return this._medicos;
        };
        Hospital.prototype.addPacientes = function (paciente) {
            this._pacientes.push(paciente);
        };
        Hospital.prototype.getPacientes = function () {
            return this._pacientes;
        };
        Hospital.prototype.addProntoSocorros = function (prontoSocorro) {
            this._prontoSocorro.push(prontoSocorro);
        };
        Hospital.prototype.getProntoSocorros = function () {
            return this._prontoSocorro;
        };
        return Hospital;
    }());
    medicina.Hospital = Hospital;
})(medicina || (medicina = {}));
