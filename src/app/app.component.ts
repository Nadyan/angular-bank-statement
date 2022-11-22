import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'extrato-bancario';

  transferencias: any[] = [];

  transferir($event) {

    const transferencia = {...$event, data: new Date()}

    this.transferencias.push(transferencia);

    alert(
      "Solicitada nova transferência\nValor: "
      + $event.valor + "\nDestino: " + $event.destino
    );
  }
}
