import { Injectable } from '@angular/core';

@Injectable()
export class EventService {

  constructor() { }

  getEvents(){
      return [
        {
            latitude: 23.022505,
            longitude: 72.5713621,
            category: 'Gottesdienst',
            location:'Ahmedabad',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipOFhg-FLAAZd6dkHx2Algi3Q_5UwXre5CMjNk84=w408-h270-k-no',
            description : 'Ahmedabad Gottesdienst Lorem ipsum some rendom text storing event information',
            url1 : '',
            url2 : '',
            startTime: '0',
            Date: '2018-10-09',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-09',
                TimeFrom: '7:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of introduction of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-09',
                TimeFrom: '1:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-09',
                TimeFrom: '2:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Conclusion of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-09',
                TimeFrom: '3:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Test of Ahmedabad location'
            }]
        },{
            latitude: 21.170240,
            longitude: 72.8310607,
            category: 'Beichten',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipOFhg-FLAAZd6dkHx2Algi3Q_5UwXre5CMjNk84=w408-h270-k-no',
            description : 'Surat Beichten Lorem ipsum some rendom text storing event information',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-08',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-08',
                TimeFrom: '1:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of introduction of surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-08',
                TimeFrom: '3:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-08',
                TimeFrom: '5:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Conclusion of surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-08',
                TimeFrom: '7:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Test of surat location'
            }]
        },{
            latitude: 23.022505,
            longitude: 72.5713621,
            category: 'Gottesdienst',
            location:'Ahmedabad',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipOFhg-FLAAZd6dkHx2Algi3Q_5UwXre5CMjNk84=w408-h270-k-no',
            description : 'Ahmedabad Gottesdienst Lorem ipsum some rendom text storing event information',
            url1 : '',
            url2 : '',
            startTime: '0',
            Date: '2018-10-08',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-08',
                TimeFrom: '2:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of introduction of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-08',
                TimeFrom: '1:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-08',
                TimeFrom: '4:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Conclusion of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-08',
                TimeFrom: '3:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Test of Ahmedabad location'
            }]
        },{
            latitude:21.170240,
            longitude:72.8310607,
            category: 'Offene Kapelle',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipNH3Icez9qFvJhYWVGaLlUa-_UehLQEfyax3Skp=w408-h243-k-no',
            description : 'Surat Offene Kapell Lorem ipsum some rendom text storing event information',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-09',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-08',
                TimeFrom: '3:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-08',
                TimeFrom: '7:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-08',
                TimeFrom: '11:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-08',
                TimeFrom: '14:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            }]
        },{
            latitude: 23.022505,
            longitude: 72.5713621,
            category: 'Gottesdienst',
            location:'Ahmedabad',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipOFhg-FLAAZd6dkHx2Algi3Q_5UwXre5CMjNk84=w408-h270-k-no',
            description : 'Ahmedabad Gottesdienst Lorem ipsum some rendom text storing event information',
            url1 : '',
            url2 : '',
            startTime: '0',
            Date: '2018-10-10',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-10',
                TimeFrom: '2:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of introduction of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-10',
                TimeFrom: '1:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-10',
                TimeFrom: '18:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Conclusion of Ahmedabad location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-10',
                TimeFrom: '3:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Test of Ahmedabad location'
            }]
        },{
            latitude:21.170240,
            longitude:72.8310607,
            category: 'Offene Kapelle',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipNH3Icez9qFvJhYWVGaLlUa-_UehLQEfyax3Skp=w408-h243-k-no',
            description : 'Surat Offene Kapelle Lorem ipsum some rendom text storing event information asdasd asd asdsad asda asd asd asdsad asdas as asd asdasd asd asdas sada d dfssdfdsf sdfbdsf dsfdsf dsf dsfsdf sdfsd fdsf dsfs dfs dsfsdf dsf dsfsd f dsf dsfds sadfdsafdsf dsfds dsfdsf dsf sdf sdf sdf sdf sdf Bhargav',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-10',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-10',
                TimeFrom: '6:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-10',
                TimeFrom: '8:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-10',
                TimeFrom: '17:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-10',
                TimeFrom: '19:30',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            }]
        },{
            latitude:21.170240,
            longitude:72.8310607,
            category: 'Offene Kapelle',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipNH3Icez9qFvJhYWVGaLlUa-_UehLQEfyax3Skp=w408-h243-k-no',
            description : 'Surat Offene Kapelle Lorem ipsum some rendom text storing event information asdasd asd asdsad asda asd asd asdsad asdas as asd asdasd asd asdas sada d dfssdfdsf sdfbdsf dsfdsf dsf dsfsdf sdfsd fdsf dsfs dfs dsfsdf dsf dsfsd f dsf dsfds sadfdsafdsf dsfds dsfdsf dsf sdf sdf sdf sdf sdf Bhargav',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-15',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-15',
                TimeFrom: '6:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-15',
                TimeFrom: '8:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-15',
                TimeFrom: '17:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-15',
                TimeFrom: '19:30',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            }]
        },{
            latitude:21.170240,
            longitude:72.8310607,
            category: 'Offene Kapelle',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipNH3Icez9qFvJhYWVGaLlUa-_UehLQEfyax3Skp=w408-h243-k-no',
            description : 'Surat Offene Kapelle Lorem ipsum some rendom text storing event information asdasd asd asdsad asda asd asd asdsad asdas as asd asdasd asd asdas sada d dfssdfdsf sdfbdsf dsfdsf dsf dsfsdf sdfsd fdsf dsfs dfs dsfsdf dsf dsfsd f dsf dsfds sadfdsafdsf dsfds dsfdsf dsf sdf sdf sdf sdf sdf Bhargav',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-16',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-16',
                TimeFrom: '6:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-16',
                TimeFrom: '8:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-16',
                TimeFrom: '17:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-16',
                TimeFrom: '19:30',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            }]
        },{
            latitude:21.220240,
            longitude:72.8310607,
            category: 'Gottesdienst',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipNH3Icez9qFvJhYWVGaLlUa-_UehLQEfyax3Skp=w408-h243-k-no',
            description : 'Surat Gottesdienst Lorem ipsum some rendom text storing event information asdasd asd asdsad asda asd asd asdsad asdas as asd asdasd asd asdas sada d dfssdfdsf sdfbdsf dsfdsf dsf dsfsdf sdfsd fdsf dsfs dfs dsfsdf dsf dsfsd f dsf dsfds sadfdsafdsf dsfds dsfdsf dsf sdf sdf sdf sdf sdf Bhargav',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-16',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-16',
                TimeFrom: '15:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-16',
                TimeFrom: '12:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-16',
                TimeFrom: '13:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-16',
                TimeFrom: '14:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            }]
        },{
            latitude:21.220240,
            longitude:72.8310607,
            category: 'Gottesdienst',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipNH3Icez9qFvJhYWVGaLlUa-_UehLQEfyax3Skp=w408-h243-k-no',
            description : 'Surat Gottesdienst Lorem ipsum some rendom text storing event information asdasd asd asdsad asda asd asd asdsad asdas as asd asdasd asd asdas sada d dfssdfdsf sdfbdsf dsfdsf dsf dsfsdf sdfsd fdsf dsfs dfs dsfsdf dsf dsfsd f dsf dsfds sadfdsafdsf dsfds dsfdsf dsf sdf sdf sdf sdf sdf Bhargav',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-18',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-18',
                TimeFrom: '00:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-18',
                TimeFrom: '11:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-18',
                TimeFrom: '13:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-18',
                TimeFrom: '14:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-18',
                TimeFrom: '00:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-18',
                TimeFrom: '11:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-18',
                TimeFrom: '13:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-18',
                TimeFrom: '14:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            }]
        },{
            latitude:21.220240,
            longitude:72.8310607,
            category: 'Gottesdienst',
            location:'Surat',
            showWindow:false,
            photo : 'https://lh5.googleusercontent.com/p/AF1QipNH3Icez9qFvJhYWVGaLlUa-_UehLQEfyax3Skp=w408-h243-k-no',
            description : 'Surat Gottesdienst Lorem ipsum some rendom text storing event information asdasd asd asdsad asda asd asd asdsad asdas as asd asdasd asd asdas sada d dfssdfdsf sdfbdsf dsfdsf dsf dsfsdf sdfsd fdsf dsfs dfs dsfsdf dsf dsfsd f dsf dsfds sadfdsafdsf dsfds dsfdsf dsf sdf sdf sdf sdf sdf Bhargav',
            url1 : '',
            url2 : '',
            startTime: '3',
            Date: '2018-10-22',
            isDetails: true,
            isEventWindowDetails:true,
            eventDetail:[{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Indroduction",
                Date: '2018-10-22',
                TimeFrom: '00:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of introduction of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Seminar",
                Date: '2018-10-22',
                TimeFrom: '14:00',
                TimeTo: '3:00',
                Detail: 'This is dummy event detail of Seminar of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Conclusion",
                Date: '2018-10-22',
                TimeFrom: '13:30',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Conclusion of Surat location'
            },{
                isEventDetail:true,
                isEventWindowDetail:true,
                name: "Test",
                Date: '2018-10-22',
                TimeFrom: '10:00',
                TimeTo: '6:00',
                Detail: 'This is dummy event detail of Test of Surat location'
            }]
        }
      ];
  }
}
