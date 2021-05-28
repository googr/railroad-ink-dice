import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {DiceComponent} from './dice/dice.component';
import {FormsModule} from '@angular/forms';
import { DiceTrayComponent } from './dice-tray/dice-tray.component';
import {RouterModule, Routes} from '@angular/router';
import { RulesComponent } from './rules/rules.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';

const routes: Routes = [
  { path: '',   redirectTo: '/dice-tray', pathMatch: 'full' },
  { path: 'dice-tray', component: DiceTrayComponent },
  { path: 'rules', component: RulesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DiceComponent,
    DiceTrayComponent,
    RulesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PdfViewerModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
