import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ConfigModule } from '@spartacus/core';
import { StorefrontModule } from '@spartacus/storefront';

import { AppComponent } from './app.component';
import { SiemensHeaderComponent } from './siemens-header/siemens-header.component';

@NgModule({
  declarations: [AppComponent, SiemensHeaderComponent],
  imports: [
    BrowserModule,
    FormsModule,
    StorefrontModule,
    ConfigModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/',
        },
      },
      context: {
        baseSite: ['electronics-spa'],
      },
      cmsComponents: {
        SiemensHeaderComponent: {
          component: SiemensHeaderComponent,
        },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
