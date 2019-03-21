
//Create variable to generate random number from 1 to 100
var targetNumber = Math.floor(Math.random()*100+1);
console.log(targetNumber);

//Counting the sum of current State
var sum = 0;
//Send target number to html to display
$("#target-Number").text(targetNumber);

//Random Number Option
var numberOption = [];
for(var i=0; i<4 ;i++){
    numberOption[i] = Math.floor(Math.random()*10+1);
}
console.log(numberOption);


//Assign Number for each Image 
var gameStart = function(){
    var gold = $("<img>");
        gold.addClass("gold-image");
        gold.attr("src",url="images/Gold 1.jpg");
        gold.attr("gold-value", numberOption[0]);
        $("#goldImages").append(gold);

    var gold = $("<img>");
        gold.addClass("gold-image");
        gold.attr("src",url="images/Gold 2.jpg");
        gold.attr("gold-value", numberOption[1]);
        $("#goldImages").append(gold);

    var gold = $("<img>");
        gold.addClass("gold-image");
        gold.attr("src",url="images/Gold 4.jpg");
        gold.attr("gold-value", numberOption[2]);
        $("#goldImages").append(gold);

    var gold = $("<img>");
        gold.addClass("gold-image");
        gold.attr("src",url="images/Gold 6.jpg");
        gold.attr("gold-value", numberOption[3]);
        $("#goldImages").append(gold);
}
gameStart();

//Using onclick functions
$(".gold-image").on("click", function(){
    var goldValue = ($(this).attr("gold-value"));
    goldValue = parseInt(goldValue);

    sum += goldValue;
    $("#current-State").text(sum);
    
    if(sum === targetNumber){
        alert("Winner!");
    }else if (sum >= targetNumber){
        alert("You lose!");
    }
})




