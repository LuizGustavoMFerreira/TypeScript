///<reference path="hospital.ts" />
var medicina;
(function (medicina) {
    var ProntoSocorro = /** @class */ (function () {
        function ProntoSocorro() {
        }
        ProntoSocorro.prototype.setCodProntoSocorro = function (codProntoSocorro) {
            this._codProntoSocorro = codProntoSocorro;
        };
        ProntoSocorro.prototype.getCodProntoSocorro = function () {
            return this._codProntoSocorro;
        };
        ProntoSocorro.prototype.setEndereco = function (endereco) {
            this._endereco = endereco;
        };
        ProntoSocorro.prototype.getEndereco = function () {
            return this._endereco;
        };
        return ProntoSocorro;
    }());
    medicina.ProntoSocorro = ProntoSocorro;
})(medicina || (medicina = {}));
