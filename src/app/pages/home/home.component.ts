import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-home',
  imports: [MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    { icon: 'school', title: 'Tanfolyamok', desc: 'Minőségi oktatás bármikor, bárhol.' },
    { icon: 'people', title: 'Oktatók', desc: 'Tapasztalt szakértők segítenek.' },
    { icon: 'support', title: 'Támogatás', desc: '24/7 ügyfélszolgálat minden felhasználónknak.' }
  ];
}
