import {NgModule} from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatStepperModule} from '@angular/material/stepper';

const material = [MatSlideToggleModule,MatMenuModule,MatListModule,MatDividerModule,MatGridListModule,
MatButtonModule,MatIconModule,MatButtonToggleModule,MatSidenavModule,MatToolbarModule,MatBadgeModule,MatProgressSpinnerModule,
MatExpansionModule,MatCardModule, MatTabsModule,MatStepperModule];

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialmodulesModule { }
