import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'extrato-bancario';

  constructor(private service: TransferenciaService) {}

  transferir($event) {
    this.service.adicionar($event);
    alert(
      "Solicitada nova transferência\nValor: "
      + $event.valor + "\nDestino: " + $event.destino
    );
  }
}
