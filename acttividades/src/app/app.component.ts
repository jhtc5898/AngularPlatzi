import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  btndisabled = true;

  persona  = {
    name :'Inicio',
  age : 10,
  image : "https://www.geekmi.news/__export/1648594258830/sites/debate/img/2022/03/29/gear52.jpg_2055743167.jpg"

  }

  save()
  {
    this.btndisabled = !this.btndisabled;
  }

  edadmas()
  {
    this.persona.age = this.persona.age+1
  }



}
