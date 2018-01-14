var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];


var cardsInPlay = [];

//checking for a match
var checkForMatch = function() {
	//This line I found a bit confusing why is it = to 1 and not 2 and what is the first if line doing in relation to the others?
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");	
} else {
	alert("Sorry try again");
}
}		
};

var flipCard = function() {
	//here we're getting the data-id attribute of the card that was clicked and storing it in a varibale called cardId
	//don't really understand why we're using this or calling the data-id up here above where we set it
	var cardId = this.getAttribute("data-id");
	//setting the attribute to the 
	this.setAttribute("src", cards[cardId].cardImage);
	
	//calling the check for a match function
	checkForMatch();
	
	// putting the cardId parameter inside Card and creating 
	console.log("User Flipped " + cards[cardId].rank);
	//putting the card that was played into the cardinplay array
	cardsInPlay.push(cards[cardId].rank);
	//so we can "see" the cards that have been flipped
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}

var createBoard = function() {
 for (var i = 0; i < cards.length; i++){ 
 // using the createElement method to create an img element and store to variable
 // or was i meant to call this cardElement
 var cardElement = document.createElement("img");
 
 //using the setAttribute mettion to add a src attribute for the cardElement
 cardElement.setAttribute("src", 'images/back.png');
 //setting the cards data id attribute to be the index of the current element (i)
 cardElement.setAttribute('data-id', i);
 //using addEventListener to wait and add a click event to the cardElement with the function flipCard
 cardElement.addEventListener('click', flipCard);
 //finally appending the current cardElement to the game board
 document.getElementById('game-board').appendChild(cardElement);
 }
};
createBoard();
