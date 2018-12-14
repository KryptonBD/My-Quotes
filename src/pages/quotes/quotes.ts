import {Component, OnInit} from "@angular/core";
import {AlertController, NavParams} from "ionic-angular";
import {Quotes} from "../../data/quotes.interface";
import {QuotesServices} from "../../services/quotes";

@Component({
  selector: 'page-quotes',
  templateUrl: './quotes.html'
})
export class QuotesPage implements OnInit{
  quoteGroup: {category: string, quotes: Quotes[], icon: string};
  constructor(private navParams: NavParams,
              private alrtCtrl: AlertController,
              private quoteService: QuotesServices){}
  ngOnInit(){
    this.quoteGroup = this.navParams.data;
  }

  onAddtoFavorite(quote: Quotes) {
     const alert = this.alrtCtrl.create({
       title: 'Add Quote',
       subTitle: 'Are You Sure?',
       message: 'Are you Sure you want to add the Quote?',
       buttons: [
         {
           text: 'Yes, I\'m Sure',
           handler: () => {
             this.quoteService.addToFavorite(quote);
           }
         },
         {
           text: 'No, I changed my mind',
           role: 'cancel',
           handler: () => {
             console.log('Canceled!!')
           }
         }


       ]
     });
     alert.present();
  }

  onRemoveFromFavorite(quote: Quotes) {
    this.quoteService.removeFromFavorite(quote);
  }

  isFavorite(quote: Quotes) {
    return this.quoteService.isFavoriteQuote(quote);
  }

}
