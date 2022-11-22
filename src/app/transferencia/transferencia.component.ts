import { Component } from "@angular/core";

@Component({
    selector:'app-transferencia',
    templateUrl:'./transferencia.component.html',
    styleUrls:['./transferencia.component.scss']
})
export class TransferenciaComponent {
    valor: number;
    destino: number;
    
    transferir() {
        alert("Solicitada nova transferência\nValor: " + this.valor + "\nDestino: " + this.destino);
    }
}
