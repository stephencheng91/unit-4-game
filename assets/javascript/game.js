var targetNumber = 0;
var sum = 0;




var gameStart = function(){
    //Create variable to generate random number from 1 to 100
    targetNumber = Math.floor(Math.random()*100+1);
    console.log(targetNumber);

    //Counting the sum of current State

    //Send target number to html to display
    $("#target-Number").text(targetNumber);

    //Random Number Option
    var numberOption = [];
    for(var i=0; i<4 ;i++){
        numberOption[i] = Math.floor(Math.random()*10+1);
    }
    console.log(numberOption);

    for(var j =0; j<4; j++){
        var gold = $("<img>");
            gold.addClass("gold-image");
            gold.attr("src",url="assets/images/Gold "+[j]+".jpg");
            gold.attr("gold-value", numberOption[j]);
            $("#goldImages").append(gold);

    }
}

gameStart();

function reset(){
    $("#goldImages").empty();
    sum = 0;
    $("#current-State").text(sum);
    gameStart();
}


//Using onclick functions
$(".gold-image").on("click", function(){
    var goldValue = ($(this).attr("gold-value"));
    goldValue = parseInt(goldValue);

    sum += goldValue;
    $("#current-State").text(sum);
    
    if(sum === targetNumber){
        alert("Winner!");
        reset();
    }else if (sum >= targetNumber){
        alert("You lose!");
        reset()
    }
})




