import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  arrayFotos: any = [
    {
       url: "https://t4.ftcdn.net/jpg/05/51/41/45/240_F_551414596_JWO9RpOF74g4q2NR4d3xEbyAQyzvfuis.jpg",
       description:"beagle"
     },
     {
       url: "https://t4.ftcdn.net/jpg/05/51/96/05/240_F_551960551_1dnjXrmJzGi98AQ6qqs9sYhsfeTSdjZO.jpg",
       description:"gato do natal"
     },
     {
       url: "https://t4.ftcdn.net/jpg/05/52/21/11/240_F_552211111_USnCh9cSlaqlmMWLpDicwasAgWdZyq4t.jpg",
       description:"ovelhas"
     },
     {
       url: "https://t3.ftcdn.net/jpg/05/48/89/84/240_F_548898453_cR9xP8Mxq5In9jMrrswDfnwmOZc6u1xD.jpg",
       description:"goldfish"
     },
     {
       url: "https://t3.ftcdn.net/jpg/05/51/15/44/240_F_551154480_nX0jDUQfEFv907djhIpnlj51hKyfxoQq.jpg",
       description:"urso"
     }
   ]
}
