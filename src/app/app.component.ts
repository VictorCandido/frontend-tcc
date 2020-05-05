import { Component } from '@angular/core';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', shortLabel: 'Home', icon: 'po-icon-home' },
    { label: 'Calendário', shortLabel: 'Calendário', icon: 'po-icon-calendar' },
    { label: 'Matérias', shortLabel: 'Matérias', icon: 'po-icon-edit', link: 'materias' },
    { label: 'Painel de Controle', shortLabel: 'Painel de Controle', icon: 'po-icon-settings' },
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

}
