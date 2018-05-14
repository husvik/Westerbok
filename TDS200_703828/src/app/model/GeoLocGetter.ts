import { Geolocation } from '@ionic-native/geolocation'
import { Subscriber } from 'rxjs/Subscriber';

export class GeoLocGetter{

    constructor(public geoLoc: Geolocation){

    }
    //complitionHandler tar imot 2 tall og 1 blokk med kode/function
    getCurrentLocation(doneFetching: (long: number, lat: number) => void){
        //får tak i lokasjon
        this.geoLoc.getCurrentPosition().then((resp) => {
            console.log("succsess! got location");
            //gir andre klasser cordinater og gir mulighet 
            //for å kalle på kode med engang lokasjonen er funnet
            doneFetching(resp.coords.longitude, resp.coords.latitude);
        });
    }
    
}