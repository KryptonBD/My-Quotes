import {Quotes} from "../data/quotes.interface";

export class QuotesServices {
  favoriteQuotes: Quotes[] = [];

  addToFavorite(quote: Quotes){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }
  removeFromFavorite(quote: Quotes){
    const position = this.favoriteQuotes.findIndex((quoteEl: Quotes)=>{
      return quoteEl.id == quote.id;
    });
    this.favoriteQuotes.splice(position);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }

  isFavoriteQuote(quote: Quotes) {
    return this.favoriteQuotes.find((quoteEl: Quotes)=>{
      return quoteEl.id == quote.id;
    });
  }
}
