import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent, // 确保列出了所有需要在这个模块中声明的组件
    WelcomeComponent,
  ],
  imports: [
    BrowserModule, // 根据需要添加其他模块
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
