import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { LowercaseCustomPipe } from 'src/app/pipes/lowercase-custom.pipe';


@Component({
  selector: 'app-courses',
  imports: [MatCardModule,MatButtonModule,MatToolbarModule,MatIconModule,MatGridListModule,BrowserAnimationsModule,CommonModule,LowercaseCustomPipe],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses = [
    { title: '1. Alapoktól a Mesterműig – Rajzolás Kezdőknek', description: 'Fedezd fel a rajzolás világát lépésről lépésre! Ebben a tanfolyamban megtanulod az alapvető formák, arányok, fény-árnyék és perspektíva használatát, miközben önálló kis műalkotásokat is készítesz. Tökéletes teljesen kezdőknek vagy újrakezdőknek.', instructor: 'John Doe', price: '50€' },
    { title: '2. Arc és Portré Rajzolás Lépésről Lépésre', description: 'Tanuld meg, hogyan lehet élettel teli arcokat rajzolni! Ez a kurzus segít elsajátítani a portrérajz technikáit, az arányok helyes ábrázolását, valamint a mimika és érzelmek finom közvetítését. Ideális, ha szeretnél embereket, karaktereket vagy önarcképeket rajzolni.', instructor: 'Jane Smith', price: '80€' },
    { title: '3. Kreatív Rajztechnikák és Stíluskeresés', description: 'Fedezd fel saját rajzstílusod! Ez a tanfolyam segít kilépni a megszokott sémákból, miközben kísérletezhetsz különböző anyagokkal (tinta, szén, akvarell ceruza), technikákkal és kompozíciókkal. Inspiráló kurzus mindazoknak, akik a kreatív szabadságra vágynak.', instructor: 'Anna Kovács', price: '60€' }
  ];
}
