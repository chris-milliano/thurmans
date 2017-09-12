import { Component, OnInit } from '@angular/core';

// declare const FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    ngOnInit() {
        console.log("Init app.component");

        // FB.api( "/thurmansinshaw/events", function (response) {
        //     if (response && !response.error) {
        //         console.log("RESPONSE:")
        //         console.log(response);
        //     }
        //     else {
        //         console.log("nothing came");
        //     }
        // });
    }
}
