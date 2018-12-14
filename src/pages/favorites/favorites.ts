import {Component} from "@angular/core";
import {Quotes} from "../../data/quotes.interface";
import {QuotesServices} from "../../services/quotes";
import {ModalController} from "ionic-angular";
import {QuotePage} from "../quotes/quote/quote";
import {SettingsService} from "../../services/settings";

@Component({
  selector: 'page-favorites',
  templateUrl: './favorites.html'
})
export class FavoritesPage  {
  quotes: Quotes[];
  constructor(private quoteService: QuotesServices,
              private modalCtrl: ModalController,
              private settingsService: SettingsService) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quotes) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) =>{
      if(remove) {
        this.onRemoveFromFavorite(quote);
      }
    });
  }

  onRemoveFromFavorite(quote: Quotes) {
    this.quoteService.removeFromFavorite(quote);
    // this.quotes = this.quoteService.getFavoriteQuotes();
    const position = this.quotes.findIndex((quoteEl: Quotes) => {
      return quoteEl.id == quote.id;
    });
    this.quotes.splice(position, 1);
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altBackground' : 'quoteBackground'
  }



}
