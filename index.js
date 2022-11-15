let arr = [];
function getRandomCard() 
{
    let randomNumer = Math.floor( Math.random()*13 ) + 1;
    if (randomNumer > 10) 
    {
        return 10;
    } 
    else if (randomNumer === 1) 
    {
        return 11;
    } else 
    {
        return randomNumer;
    }
}
function startgame()
{
    let num1 = getRandomCard();
    let num2 = getRandomCard();
    if(document.getElementById('start').innerHTML==='START GAME')
    {
        document.getElementById('sum').innerHTML = "Sum: ";
        document.getElementById('cards').innerHTML = "Cards: ";
        document.getElementById('head2').innerHTML = "Want to Play a Round?";
        document.getElementById('moves').innerHTML = "Moves: ";
    }
    let str1 = document.getElementById('cards').innerHTML+" ("+num1+", "+num2+")";
    document.getElementById('cards').innerHTML = str1;
    let su = num1+num2;
    document.getElementById('sum').innerHTML = "Sum: "+su;
    arr.push(su);
    if(su<21)
    {
        document.getElementById('head2').innerHTML = "OOPS! Better Luck Next Time.😐"
        document.getElementById('moves').innerHTML = "Moves: "+arr.length;
        document.getElementById('start').innerHTML = "DRAW AGAIN";
    }
    else if(su==21)
    {
        document.getElementById('head2').innerHTML = "Yeah! You Won the Game.😀"
        document.getElementById('start').innerHTML = "START GAME";
        document.getElementById('moves').innerHTML = "Moves: "+arr.length;
        arr = [];
    }
    else
    {
        document.getElementById('head2').innerHTML = "Alas! You Lose the Game.😥";
        document.getElementById('start').innerHTML = "START GAME";
        document.getElementById('moves').innerHTML = "Moves: "+arr.length;
        arr = [];
    }
}