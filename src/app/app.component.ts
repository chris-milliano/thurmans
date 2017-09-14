import { Component, OnInit } from '@angular/core';

// declare const FB: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

    // This is used to highlight the current day on the hours
    dayEnum: number;

    // This is a boolean to determine if the Google map is displayed
    showMap: boolean = true;

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

        // Set the date for hours section
        this.setDay();

        // This is an attempt to have the marker set in the center
        this.toggleMap();
    }


    // This set the date as an enum
    setDay() {
        let date = new Date();
        this.dayEnum = date.getDay();
    }


    // Toggles the Google map
    toggleMap() {
        this.showMap = !this.showMap;
    }
}
