This is TOP's javascript lesson, putting my skills to the test in creating Rock-Paper-Scissors only on the console.  

I'm to write out my ideas, and psuedocode before even touching the command line.  So below is what I've written down thus far.

WHERE?: On the console.
WHAT?: Player VS. the computer playing a game of random chance in the form of rock,paper,scissors.
HOW?: JavaScript
WHO?: Designed by myself
WHY?: To better provide for my family and build His kingdom

PROBLEMS:
   -  Computer can choose a random number 1-3 that's connect to scissors, rock, and paper
   - Player can see the options and able to choose one
   - A way to keep score, after 3 games, the winner is declared.

PSEUDOCODE
 - The user chooses a number
    - The number is connected to:
        - Rock
        - Paper
        - Scissors
- Rock is greater than scissors
- Scissors is greater than paper
- Paper is greater than rock
- The computer chooses a random number
- A prompt appears to declare who won the round
- A counter tallies the winner of each round
- Counter tallies until winner has wone 2 of 3 rounds
- User can reset game to start again


I've been able to create a function to have a random option be selected.  I'm proud of that.  But now I'm not sure how to proceed going.  I'm going to have to figure out what that specific problem is.



Interpretation of Javascript, to better comprehend what Bro Code taught.

Problem #1 
    setting up the variables that connect to the HTML files, because the intent is change have words pop up for the PLAYER, the COMPUTER, and the RESULTS. 

    So the problem is, What is being focused on?  
    ANSWER: The H1 elements and the BUTTONS.

    Bro Code was able to select these specific elements by using the document.querySelector();

Problem #2
    let player;
        - Which is used for the button.
        - As well as for creating a string for playerText.textContent.

    let computer;
        - Is used for what the computer will do when it is it's turn to pick 
        - Used in the computerText.textContent.

    let result;
        - I stopped the video, because I didn't need to get to this point, but the result variable will be created to keep score of the wins and losses.

Problem #3 
    We have the variables, now we want the buttons to be able to function, and so they need to have each button be connected to the correct value.  Ex. Button 'ROCK' when the button is "clicked" 'ROCK' appears.  That is what we want.

    PROBLEM: Buttons need value and functionality.
    ANSWER: Use an addEVentListener

    button is given a forEach() loop.  This loop  method will effect each button.  An "Arrow Function" ( => ) is defined with button.addEventListener() within the () it asks for a ('type', and a 'listener') in this case the type = 'click' when the button is pressed. 

Problem #4
    What are the perameters for when the button is 'click'ed?

    The 'listener' is defined for the player, which has the button's actual text change.

Problem #5 
    PROBLEM: The computer doesn't know how to play Rock Paper Scissor.
    ANSWER: create a randomly selected option for the computer.

    The function computerTurn() is created, and a variable to select random numbers 1-3 is created using the Math.floor which gets the whole number, rather than decimals.  Within the Math.floor a value of Math.random() that is multplied by 3 times is added.  We use 3 because there are 3 options, but the computer starts with 0 first so in reality it would be 0-2.  We then add +1 to give options 1-3 mathematically.

    We then create a switch() which is like using an if/else statement however it breaks it down into cases.  switch() is used in this case because we are using numbers 1-3 to define the options for the computer to choose Rock Paper + Scissors.  

    Case 1 then uses the empty variable computer (let computer;) to define the variable in this 1st case with 'ROCK'.  Followed by a break, to end the decision making there.  If there is no 'ROCK' the computer stops.  Case 2 + 3 then use the same empty computer variable to define the other cases.

Problem #6

    resultText.textContent is a new function, that has a value of checkWinner(); which is another function.  The new function checkWinner() is then given it's perameters with if else statements.  

    Stating what the perameters are.
     1. IF player's answer is equal to the computers' the return is a 'Draw'
     2. If it's not a 'Draw' then if the computer chooses 'ROCK' but the player picks 'PAPER' then the return is 'YOU WIN!' however, if the player does NOT choose PAPER (which is the only way to win against rock) then the return is 'YOU LOSE'
     3. The other two perameters are similarily laid out.


     ============== UPDATE of success in get the game to happen =========================
     I was able to successfully create a game or ROCK PAPER SCISSORS on the console.

     Learning.  Variables need to be established before any function, and they must be OUTSIDE of a function as well to have any effect within the function.

     I wasn't able to get any value from the getComputerChoice() on the console due to needing a "return" to be established.  That was what helped me get the function to work.

     Now I must work on keeping a tally on scores.


     <!-- UPDATE
     I have been able to get the ROCK PAPER SCISSORS game to work.
     
     The best approach that has helped me the very most was learning WHAT specific questions I needed to ask in order to find the right answers.
     
     Also making it fun, I found creating a narrative surrounding the purpose of the coding not only helped break down what I needed to find answers to, but also have names ready to specifically be used for functions, variables, etc. -->