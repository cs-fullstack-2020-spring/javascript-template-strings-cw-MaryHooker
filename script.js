
// // # JavaScript template strings class work

// // ### Exercise 1:
// // Create a template string and assign it to the variable ```my_template_string```.
// // The template string should contain the following data only:

// // ```
// // My name is ${my_name}.
// // My id is ${my_id}.
// // My address is ${my_address}.
// // ```
// // Create the variables ```my_name```, ```my_id```, and ```my_address``` and set their values to ```Kevin```, ```2112```, and ```Memphis, TN```.

// // Use the template string you created and assigned to the variable ```my_template_string``` to log the formatted output to the console.

// // Sample Output:
// // ```
// // My name is Kevin.
// // My id is 2112.
// // My address is Memphis, TN.
// // ```
// //***Declaring variables */
// let my_name = "Kevin"
// let my_id = "2112"
// let my_address = "Memphis, TN"
// //***Creating template literal */
// let my_template_string = 
// `
// My name is ${my_name}.
// My id is ${my_id}.
// My address is ${my_address}.
// `
// //***Printing literal in console */
// console.log(my_template_string)

// // ### Exercise 2:

// // Create a new template string 

// // ```
// // var contestant = "1_M_l337!";
// // var score = "9001";
// // ```

// // and use the provided variables to print 
// // ```
// // Congratulations 1_M_l337! !!, your score is 9001.
// // ```
// //****Declaring variables */
// let contestant = "1_M_1337"
// let score = "9001"
// //***Creating template literal */
// let new_string =
// `
// Congratulations ${contestant}!!!, your score is ${score}.
// `
// //***printing literal in console */
// console.log(new_string)

// // ### Exercise 3:

// // - Prompts the user for the name of their Home team
// // - Prompts the user for the name of the Visiting team
// // - Prompt the user to enter the score for their home team *(include the team name when prompting the user)*
// // `How many points did the Memphis Grizzlies score? (Home team score)`
// // - Prompt the user to enter the score for the visiting team *(include the team name when prompting the user)*
// // `How many points did the GS Warriors score? (Visting team score)`

// // In your program determine which team won the game with the highest score and display the results in an alert box. 
// //Also program to show if the teams tied.

// // Expected Output:
// // ```
// // Looks like the Memphis Grizzles have defeated the GS Warriors!

// // FINAL SCORE:
// // Home/Memphis Grizzlies: 102
// // Visitors/GS Warriors: 23
// // ```

// //***Declaring variables */
// let homeTeam = prompt("What is the name of your home team?");
// let visitors = prompt("What is the name of the visiting team?");
// let homeScore = parseInt(prompt(`How many points did the ${homeTeam} score?`));
// let visitorScore = parseInt(prompt(`How many points did the ${visitors} score?`));

// //***Conditionals */
// if(homeScore > visitorScore){
//     alert(`Looks like the ${homeTeam} have defeated the ${visitors}!

//     Final Score:
//     Home/${homeTeam}: ${homeScore}
//     Visitor/${visitors}: ${visitorScore}`)
// } else if(homeScore < visitorScore){
//     alert(`Looks like the ${visitors} have defeated the ${homeTeam}!

//     Final Score:
//     Home/${homeTeam}: ${homeScore}
//     Visitor/${visitors}: ${visitorScore}`)
// } else if(homeScore==visitorScore){
//     alert(`Looks like the ${homeTeam} and the ${visitors} have tied!

//     Final Score:
//     Home/${homeTeam}: ${homeScore}
//     Visitor/${visitors}: ${visitorScore} `)
// }

// //***Not in requirements but printing in console for myself */
// console.log(`
// Final Score:
// Home/${homeTeam}: ${homeScore}
// Visitor/${visitors}: ${visitorScore}`)