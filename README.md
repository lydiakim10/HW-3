# HW-3

## Description
Through this homework assignment, I was able to learn about the different Javascript codes that coders use to create functions on their website. After learning about HTML and CSS, I was able to understand the use of Javascript and how much of a valuable tool it is. Through this homework project, I was able to code Javascript to create an accessible and useful password generator. When a user opens up this website, the user will be able to generate their own random password and be able to choose how many characters and what characters they would like to include in their password (lowercase letters, uppercase letters, numbers, special characters). 

## Codes in Javascript After Starter Code

### Constant Arrays and Variable Statements
- Each array for the character options have "const" so that it could be "concat" later
- Three different variable statements are written to equal different codes in order to be used in later function

### Function Statement

#### Choosing Length of Passcode
- A window will show up asking the user to choose between 8 and 128 characters for their passcode
- In the console, the length that the user has chosen will appear
- An "if" statement is used so that if the length does not satisfy the prompt (choosing a number between 8 and 128), an alert will appear asking the user to choose a number again and return them to the beginning

#### Choosing Character Options
- An else statement is then used with four different variables that ask the user to choose which characters they would like to include in their password
- Each question will show up in a confirmation window with "OK" and "cancel" for the user to choose

#### Passcode Combination Possibilities
- "If" statements are used to lay out all of the possible combinations for the user to choose
- There is an option if the user wants all character options, only three character options, only two character options, or only one character option
- An "else" statement ends it if the user does not choose any one of the character options. An alert will appear asking the user to pick at least one of the options and will return them to the beginning

#### Random Character Equation
- Depending on what character options the user wants, the different characters will show up in the console
- A "for loop" is used and will depend on the length of the desired passcode, the character options chosen, and the length of the character options through a mathamatical equation
- "Push" is used so that the different character combinations goes into the end of an array

#### Put Random Passcode into HTML
- The password now equals the array used in the random character equation section
- A "join" statement is included in the line of code so that the array now becomes a string
- In the console, the randomized password will appear
- "return password" will make the randomized password appear in the box

### Website Screenshot
![Alttext](/Develop/full-website.png)

### Link to Site
