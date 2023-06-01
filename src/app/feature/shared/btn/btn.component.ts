import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
})
export class BtnComponent {
  @Input() public type: 'submit' | 'button' = 'button';
  @Input() public color: 'success' | 'primary' | 'alert' | 'danger' = 'primary';

  private mapColor = {
    primary: {
      'bg-cyan-700': true,
      'hover:bg-cyan-800': true,
    },
    success: {
      'bg-green-700': true,
      'hover:bg-green-800': true,
    },
    alert: {
      'bg-yellow-700': true,
      'hover:bg-yellow-800': true,
    },
    danger: {
      'bg-red-700': true,
      'hover:bg-red-800': true,
    },
  };

  public get colors() {
    const color = this.mapColor[this.color];

    return color ?? {};
  }
}
