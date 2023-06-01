import { Component } from '@angular/core';
import { IJwtResponse } from 'src/app/core/models/auth.model';
import { TokenService } from 'src/app/core/services/token.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
})
export class ReportsComponent {
  public user: IJwtResponse;

  constructor(private tokenService: TokenService) {
    this.user = this.tokenService.getInfo();
  }
}
