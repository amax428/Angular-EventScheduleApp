import {
    Component,
    ElementRef,
    NgZone,
    OnInit,
    ViewChild,
    TemplateRef
} from '@angular/core';
import {
    FormControl
} from '@angular/forms';
import { } from 'googlemaps';
import {
    MapsAPILoader
} from '@agm/core';
import {
    EventService
} from '../services/event.service';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    public latitude: number;
    public longitude: number;
    public lat: number;
    public long: number;

    isToday = true;
    public latitude1: number;
    public longitude1: number;
    public searchControl: FormControl;
    public zoom: number;
    public events = [];
    public photos = [];
    public allEvents = [];
    public searchText = '';
    public location_name = '';
    public location_desc = '';
    public location_photo = '';
    public location_url1 = '';
    public location_url2 = '';
    public stateFlag = false;
    public sidebarStateFlag = false;
    public isPlaceDetail = false;
    public isPlaceEvent = false;
    

    @ViewChild("search")
    public searchElementRef: ElementRef;

    @ViewChild("dateField")
    public dateField: ElementRef;
    timeRange = '0, 24';

    @ViewChild("dateControl")
    public dateControl: ElementRef
    today;
    constructor(
        private mapsAPILoader: MapsAPILoader,
        private ngZone: NgZone,
        private eventService: EventService
    ) { }

    protected map: any;

    

  protected mapReady(map) {
    this.map = map;
  if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            this.lat = position.coords.latitude;
            this.long = position.coords.longitude;
             this.map.setCenter({ lat: this.lat, lng: this.long});
            //this.zoom = 10;
        });
    }
// this.lat = 38.9764603;
//      this.long = -107.7934508;
    // this.zoom=12;
   // console.log(this.map);
  }
 // public markerClicked = (markerObj) => {
 //     console.log(markerObj);
 //    if (this.map)
 //      this.map.center({ lat: markerObj.latitude, lng: markerObj.longitude });
 //    console.log('clicked', markerObj, { lat: markerObj.latitude, lng: markerObj.longitude });
 //  }
    ngOnInit() {
        this.today = '09/23/2018';
        this.events = this.eventService.getEvents();
        this.allEvents = this.eventService.getEvents();
        //set google maps defaults
        this.zoom = 6;
        this.isToday = true;

        this.dateField.nativeElement.value = "Today";
        //create search FormControl
        this.searchControl = new FormControl();

        // if ("geolocation" in navigator) {
        //     navigator.geolocation.getCurrentPosition((position) => {
        //         this.lat = position.coords.latitude;
        //         this.long = position.coords.longitude;
        //         //this.zoom = 10;
        //     });
        // }
        //load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                //types: ["address"]
            });
            autocomplete.addListener("place_changed", () => {
                this.ngZone.run(() => {
                    //get the place result
                    let place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    this.photos = place.photos;
                    var urls = [];
                        this.photos.forEach((photo) => {
                        urls.push(photo.getUrl({
                              maxWidth: 500,
                              maxHeight: 300
                            }));
                          });
                    this.location_name = place.name;
                    this.location_photo=urls[0];
                    this.location_desc=place.formatted_address;
                    this.location_url1 = place.website;
                    this.location_url2 = place.website;
                    // this.isPlaceDetail = true;
                    // this.isPlaceEvent = true;
                    //verify result
                   // console.log(place);
                    //set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 10;
                    for (var i = 0; i < this.allEvents.length; i++) {
                        if(this.allEvents[i].location.trim()==this.location_name.trim()){
                            $('.divheight').hide();
                            this.allEvents[i].isEventWindowDetails = !this.allEvents[i].isEventWindowDetails;
                            // for (var j = 0; j < this.allEvents[i].eventDetail.length; j++) {
                            //     this.allEvents[i].eventDetail[j].isEventDetail = !this.allEvents[i].eventDetail[j].isEventDetail;
                            // }
                        }
                        else{
                            this.allEvents[i].isEventWindowDetails = false;
                        }   
                    }
                });
            });
        });
    }

    // Date filter logic will go here.
    DateChange(param) {
        this.today = param.toElement ? param.toElement.value : param.originalTarget.value;

        this.isToday = this.today == this.getToday(0);
        if (this.isToday) {

            this.dateField.nativeElement.value = "Today";
        }

        var cat="";
        var arr = this.timeRange.split(',');
        var start = $('.start-range').text();
        var end = parseFloat(arr[1]);
        if($('#catMenu .social_icon').hasClass('active')){
            cat = $('#catMenu .active').find('span').text();
        }
        for (var i = 0; i < this.allEvents.length; i++) {
            this.allEvents[i].showWindow=true;
        }
        this.FilterMarker(cat,start,end,this.today,true,'date');
        
    }

    // Time filter logic will go here.
    TimeChanged(param) {
        
        this.timeRange = param.toElement ? param.toElement.value : param.originalTarget.value;
        var arr = this.timeRange.split(',');
        var start = $('.start-range').text();
        var end = parseFloat(arr[1]);
        var cat="";
        var date = $('#datepicker').val();
        if($('#catMenu .social_icon').hasClass('active')){
            cat = $('#catMenu .active').find('span').text();
        }
        this.FilterMarker(cat,start,end,date,true,'time');
    }

    // category filter logic will go here.
    CategoryChange(cat) {
        var date = $('#datepicker').val();
        var arr = this.timeRange.split(',');
        var start = $('.start-range').text();
        var end = parseFloat(arr[1]);
        for (var i = 0; i < this.allEvents.length; i++) {
            this.allEvents[i].showWindow=true;
        }
        this.stateFlag = !this.stateFlag;
        $(".open-img").toggleClass("show");
        $(".hide-img").toggleClass("hide");
        this.FilterMarker(cat,start,end,date,true,'category');
        
    }
    filterCat = [];

    // Events will be filtered here.
    FilterMarker(cat=null,start=null,end=null,date=null,isDetails=null,type=null) {
        var evt = [];
        if(date=="Today"){
            date = this.getToday(0);
        }
        if(cat.trim()=="All"){
            cat = '';
        }
        var arr = start.split(':');
        let hours = parseInt(arr[0]);
        let minute = parseInt(arr[1]);
        var hoursArr=[];
        var minuteArr=[];
        for (var i = 0; i < this.allEvents.length; i++) {
            if(type=='category' || type=='date'){
                this.allEvents[i].isDetails = !isDetails;
            }else if(type=='time'){
                this.allEvents[i].showWindow=!this.allEvents[i].showWindow;
            }

            if(cat == ''){
                if(date == this.allEvents[i].Date){
                    var minute1 = 0;
                    for (var j = 0; j < this.allEvents[i].eventDetail.length; j++) {
                        var arr1 = this.allEvents[i].eventDetail[j].TimeFrom.split(':');
                        var hours1 = parseInt(arr1[0]);
                        minute1 = parseInt(arr1[1]);
                        hoursArr.push(hours1);
                        minuteArr.push(minute1);
                    }
                    let max = Math.max.apply(null, hoursArr)+'.'+minute1;
                    for (var j = 0; j < this.allEvents[i].eventDetail.length; j++) {
                        var arr = start.split(':');
                        let hours = parseInt(arr[0]);
                        let minute = parseInt(arr[1]);
                        var arr1 = this.allEvents[i].eventDetail[j].TimeFrom.split(':');
                       
                        let hours1 = parseInt(arr1[0]);
                        let minute1 = parseInt(arr1[1]);
                        var last = this.allEvents[i].eventDetail[j];
                        var time1 = hours+'.'+minute;
                        var time2 = hours1+'.'+minute1;
                        if(parseFloat(time2) >= parseFloat(time1)){
                                this.allEvents[i].eventDetail[j].isEventDetail = true;
                                this.allEvents[i].eventDetail[j].isEventWindowDetail = true;  
                        }else{
                            this.allEvents[i].eventDetail[j].isEventDetail = false;
                            this.allEvents[i].eventDetail[j].isEventWindowDetail = false;
                        }

                        if(parseFloat(time1)>parseFloat(max)){
                            this.allEvents[i].showWindow=false;
                        }
                        if(parseFloat(time1) == parseFloat(max) && this.allEvents[i].isDetails){
                           $('.divheight').show(); 
                        }
                        
                        
                    }
                    this.allEvents[i].eventDetail.sort(function(obj1, obj2) {
                        return parseInt(obj1.TimeFrom) - parseInt(obj2.TimeFrom);
                    });
                    evt.push(this.allEvents[i]);
                    
                }
            }else{
                if((cat.trim() == this.allEvents[i].category) && date == this.allEvents[i].Date){
                    var minute1 = 0;
                    for (var j = 0; j < this.allEvents[i].eventDetail.length; j++) {
                        var arr1 = this.allEvents[i].eventDetail[j].TimeFrom.split(':');
                        var hours1 = parseInt(arr1[0]);
                        var minute1 = parseInt(arr1[1]);
                        hoursArr.push(hours1);
                        minuteArr.push(minute1);
                    }
                    let max = Math.max.apply(null, hoursArr)+'.'+minute1;;
                    for (var j = 0; j < this.allEvents[i].eventDetail.length; j++) {
                        var arr = start.split(':');
                        let hours = parseInt(arr[0]);
                        let minute = parseInt(arr[1]);
                        var arr1 = this.allEvents[i].eventDetail[j].TimeFrom.split(':');
                        let hours1 = parseInt(arr1[0]);
                        let minute1 = parseInt(arr1[1]);
                        var time1 = hours+'.'+minute;
                        var time2 = hours1+'.'+minute1;
                        if(parseFloat(time2) >= parseFloat(time1)){
                            this.allEvents[i].eventDetail[j].isEventDetail = true;
                            this.allEvents[i].eventDetail[j].isEventWindowDetail = true;
                        }else{
                           this.allEvents[i].eventDetail[j].isEventDetail = false;
                           this.allEvents[i].eventDetail[j].isEventWindowDetail = false;
                        }


                        if(parseFloat(time1)>parseFloat(max)){
                            this.allEvents[i].showWindow=false;
                        }

                        if(parseFloat(time1) == parseFloat(max) && this.allEvents[i].isDetails){
                           $('.divheight').show(); 
                        }
                    }
                    this.allEvents[i].eventDetail.sort(function(obj1, obj2) {
                        return parseInt(obj1.TimeFrom) - parseInt(obj2.TimeFrom);
                    });
                    if(this.location_name!=null && this.location_name!=''){
                        if(this.allEvents[i].location.trim()==this.location_name.trim()){
                            evt.push(this.allEvents[i]);
                        }   
                    }else{
                        evt.push(this.allEvents[i]);
                    }
                    
                }
            }
        }
        if (evt.length > 0) {
            this.latitude = evt[0].latitude;
            this.longitude = evt[0].longitude;
        }
        this.events = [...evt];  
    }
    getToday(i) {
        var today = new Date();
        today.setDate(today.getDate() + i);
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var day = dd.toString(),
            month = mm.toString();
        var yyyy = today.getFullYear();
        if (dd < 10) {
            day = '0' + dd;
        }
        if (mm < 10) {
            month = '0' + mm;
        }
        //return month + '/' + day + '/' + yyyy;
        return yyyy + '-' + month + '-' + day ;
    }
    private setCurrentPosition() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 10;
            });
        }
    }

    
    onResize(param) {
        //console.log(param);
    }
    clearText() {
        this.searchControl.setValue('');
    }

    bodyFocus() {
        this.stateFlag = false;
        this.sidebarStateFlag = false;
        if($(".open-img").hasClass('show')){
             $(".open-img").removeClass("show");
             $(".hide-img").removeClass("hide");
        }else{
             $(".open-img").removeClass("hide");
             $(".hide-img").removeClass("show");
        
       }
    }
    calculateClasses() {
        return {
            'collapse': true,
            'in': this.stateFlag
        };
    }

    //category show hide
    toggleMenuBtn() {
        this.stateFlag = !this.stateFlag;

    }
    showHideDetails(evt) {
        evt.isDetails = !evt.isDetails;
        $('.divheight').hide();
    }

    //sidebar menu show hide
    toggleSidebarMenu() {
        this.sidebarStateFlag = !this.sidebarStateFlag;
    }
    sidebarMenu() {
        return {
            'collapse': true,
            'in': this.sidebarStateFlag
        };
    }
    closeNav(){
        this.sidebarStateFlag = false;
    }
    closePlaceSearch(){
        this.isPlaceDetail = false;
        $('.divheight').hide();
        this.searchElementRef.nativeElement.focus(); 
    } 
    toggleEventDetail(i,j){
        if($('#event'+i+j).hasClass('placeEventDetailShowHide')){
            $('#event'+i+j).removeClass('placeEventDetailShowHide');
        }else{
            $('#event'+i+j).addClass('placeEventDetailShowHide');
        } 
    }
    openDetailWindow(eventData,cat){
        this.isPlaceDetail = true;
        this.isPlaceEvent = true;
        this.location_name = eventData.location;
        this.location_photo=eventData.photo;
        this.location_desc=eventData.description;
        this.location_url1 = eventData.url1;
        this.location_url2 =eventData.url1;
        for (var i = 0; i < this.allEvents.length; i++) {
            if(this.allEvents[i].category==eventData.category && this.allEvents[i].location==eventData.location){
                this.allEvents[i].isEventWindowDetails =true;
            }else{
                this.allEvents[i].isEventWindowDetails =false;
            }
        }
    }
    minimize(i,j){
        $('div #hide'+i+j).siblings('.divheight').show();
    }
}