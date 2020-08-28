ass Deck {

	    constructor() {
		         this.deck =[]
		         this.dealt_cards = []
		        }
	    generate_deck() {
		         var card = (suit,value)  => {
				        this.name=value + ' of ' + suit
				        this.suit=suit
				        this.value= value
				     return {name:this.name }

				     }

		        var values = ['2','3','4','5','6','7','8','9','10','11','J=10','Q','K'];
		        var suits = ['clubs','Diamonds','Spades','Hearts']
		        var J= 10;
		        var K=10;
		        var Q=10;

		            for ( var s =0; s< suits.length; s++) {
				                for (var v=0;v<values.length; v++) {
							              this.deck.push(card(suits[s], values[v]))

							            }
				            }

		        }
	    print_deck () {
		         if (this.deck.length==0) {
				         console.log(' The dack has been generated')

				      }
		         else{
				         for (var c=0; c<this.deck.length; c++) {
						         //console.log(c, this.deck[c])
						         var playerhand = Math.floor(Math.random() * this.name.length )
						                 var playerhand1 = Math.floor(Math.random() * this.name.length )
						                         var dealerhand = Math.floor(Math.random() * this.name.length )
						                                 var dealerhand1 = Math.floor(Math.random() * this.name.length )
						 
						                                        var playerHandValue = playerhand + playerhand1
						                                                var dealerHandValue = dealerhand + dealerhand1
						                                                         console.log(c)
						                                                                 console.log('playerhand:'+ playerhand +','+  playerhand1)
						                                                                         console.log('player-hand-value :'+ playerHandValue)
						                                                                                 console.log('dealer-hand:' + dealerhand +','+ dealerhand1)
						                                                                                         console.log('dealer-Hand-Value :'+ dealerHandValue)
						                                                                                                 if( playerHandValue < dealerHandValue  && dealerHandValue <= 21) {
						                                                                                                             console.log("player is the winner")
						                                                                                                                     }
						                                                                                                                            }
						                                                                                                                                }
						                                                                                                                                    }
						                                                                                                                                 }
						                                                                                                                                  deck = new Deck()
						                                                                                                                                    deck.generate_deck()
						
						                                                                                                                                    deck.print_deck()
						 
