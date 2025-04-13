import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-instructors',
  imports: [MatCardModule,MatButtonModule,MatToolbarModule,MatIconModule,MatGridListModule,BrowserAnimationsModule,CommonModule],
  templateUrl: './instructors.component.html',
  styleUrl: './instructors.component.scss'
})
export class InstructorsComponent {
  teachers = [
    { name: 'John Doe', subject: 'Az Alapok Mestere', bio: 'Kata több mint 10 éve tanít kezdőknek rajzot. Szenvedélye, hogy bárkiből képes előhozni a kreatív énjét – még akkor is, ha valaki azt hiszi, "nem tud rajzolni". A tanfolyamai lépésről lépésre épülnek fel, így senki nem marad le. Kata hisz benne, hogy a rajzolás mindenkié – nem csak a "tehetségeseké"', image: 'assets/john-doe.jpg', email: 'john@example.com' },
    { name: 'Jane Smith', subject: 'A Portrérajz Pro', bio: 'Jane elismert illusztrátor és portré-specialista, aki saját technikáit osztja meg a tanítványaival. Kurzusain nemcsak azt tanulod meg, hogyan rajzolj arcot, hanem azt is, hogyan adj át érzelmeket, karaktert és történetet egyetlen pillantással. Misi szeme minden apró részletet meglát – és erre téged is megtanít!', image: 'assets/jane-smith.jpg', email: 'jane@example.com' },
    { name: 'Anna Kovács', subject: ' A Kreatív Kalandor', bio: 'Anna a rajzot nemcsak technikának, hanem élménynek tartja. Kurzusai tele vannak kísérletezéssel, különféle stílusokkal és eszközökkel, a tintától a tűfilcen át az akvarellig. Ha szeretnél elszakadni a klasszikus mintáktól és szabadon alkotni, Anna kurzusai neked valók!', image: 'assets/anna-kovacs.jpg', email: 'anna@example.com' }
  ];
}
