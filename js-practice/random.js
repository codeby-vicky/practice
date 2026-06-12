let choice = ["stone","paper","scissor"];

let user = prompt("Enter Stone, Paper, Scissor or Exit:");

while(user != "exit")
{
    let a = Math.floor(Math.random() * choice.length);

    let computer = choice[a];

    console.log("Your Choice: " + user);
    console.log("Computer Choice: " + computer);

    if(user == computer)
    {
        console.log("Match Draw");
    }
    else if(
        (user == "stone" && computer == "scissor") ||
        (user == "scissor" && computer == "paper") ||
        (user == "paper" && computer == "stone")
    )
    {
        console.log("You Win");
    }
    else
    {
        console.log("Computer Wins");
    }

    user = prompt("Enter Stone, Paper, Scissor or Exit:");
}

console.log("Game Ended");