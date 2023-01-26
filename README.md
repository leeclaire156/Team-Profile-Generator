# Team Profile Generator
  
  ## Description

  This project is a [Node.js](https://nodejs.org/en/) command-line application that generates an HTML page, styled by [Bootstrap](https://getbootstrap.com/), for a team of employees with a summary of each team member based on user input. It also utilizes [Jest](https://jestjs.io/) to test the methods used to set and return the team's information.
  
  Managers utilizing this generator will be able to make a webpage of them and their team that will display their name, role, ID, and email. The emails can be clicked on to open the default email application on the local device and write an email to the selected team member's email. In addition, managers will be able to display their office's room number, their engineer's GitHub link, and their intern's current school.
  
  There are also validation checks for each of the questions asked to make sure the answers given are valid entries, to prevent incorrect data from being entered (i.e. numbers in a name or no name at all). In addition there will be tests available for the manager to use under the test folder.

  ## Table of Contents
  - [Installation](#installation)
    - [Git/Git Bash](#gitgit-bash---strongly-recommended)
    - [Visual Studio Code](#visual-studio-code-vsc---strongly-recommended)
    - [Node](#node-version-16---required-to-generate-files-and-utilize-dependencies)
    - [Inquirer](#inquirer-version-824---required-to-prompt-questions)
    - [Jest](#jest-version-824---required-for-testing)
  - [Usage](#usage---for-the-purposes-of-this-demonstration-git-bash-will-be-used-as-my-preferred-terminal)
  - [Credits](#credits)
    - [Alternatives](#alternatives)
  - [Test Instructions](#test-instructions)
  - [Questions](#questions)

  ## Installation

  Make sure the following are downloaded:

  ### `Git/Git Bash` - *Strongly Recommended*
  * While this application can be run using with the default **command prompt**, it is easier to clone this repository, make contributions, make commits, and much more by using Git/GitBash, which can be downloaded for free [here](https://git-scm.com/downloads).
  
  ![Using Git Bash to clone repository](./assets/screenshots/GitBash-Git-Clone.PNG)

  ### `Visual Studio Code [VSC]` - *Strongly Recommended*

  * If you'd like to make changes to this code or the HTML file generated, Visual Studio Code is recommended and can be downloaded for free [here](https://code.visualstudio.com/download).

  ### `Node version 16` - **REQUIRED** to generate files and utilize dependencies
  * Go to [Node's homepage, https://nodejs.org/en/](https://nodejs.org/en/), then [Downloads](https://nodejs.org/en/download/) and scroll down to the [Previous Releases](https://nodejs.org/en/download/releases/) bullet point. 

  * Toggle between the results until the desired version 16 package and click Download. This application was developed with [Node.js version 16.18.0](https://nodejs.org/dist/v16.18.0/), click on [node-v16.18.0-x64.msi](https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi) to download.

  * The Full-Stack Blog also has [instructions on how to download Node](https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs).

  ### `Inquirer version 8.2.4` - **REQUIRED** to prompt questions

  * This **MUST** be installed into this repository, start by opening the command line interface.

  * If you have Visual Code Studio, add the local Team-Profile-Generator repository to the workspace after cloning it to your computer. Then, go to 'Settings' either through the cog icon in the lower left corner and clicking Settings, or by going to File -> Preferences -> Settings in the menu bar, or the key combo of Ctrl+,

  ![Finding 'Settings' through cogwheel/gear icon](./assets/screenshots/Finding-Settings-1.PNG)

  ![Finding 'Settings' through File/Preferences/Settings](./assets/screenshots/Finding-Settings-2.PNG)

  * Then, change the settings in "Terminal: Explorer Kind" to "external" in the drop down menu.

  ![Changing "Terminal: Explorer Kind" Settings](./assets/screenshots/External-Terminal-Settings-1.PNG)
          
  * Change the filepath of the "Terminal > External: [respective operating system]" settings to the preferred command line interface program (either your system's Command Prompts's file path or Git/Git Bash's file path)

  ![Changing "Terminal > External" Settings](./assets/screenshots/External-Terminal-Settings-1.PNG)

  * After that, right-click the repository and select "Open in External Terminal"

  ![User uses Visual Studio Code to access repository through external terminal](./assets/screenshots/External-Terminal-Method-1-1.PNG)

  ![Note the match from Visual Studio Code to the opened external terminal](./assets/screenshots/External-Terminal-Method-1-2.PNG)

  * If you do not have Git Bash, open the preferred command-line terminal.

  * Use "cd Desktop" to first reach the Desktop, cd stands for change directory.

  * Continue using "cd" to navigate through the file path to reach the location of this repository on your computer.

  ![User uses Change Directory (cd) to access repository through external terminal](./assets/screenshots/External-Terminal-Method-2.PNG)

  * Once this repository has been reached, type in `npm i inquirer@8.2.4` into the terminal and hit `Enter`.
  
  ![User installs inquirer using command line](./assets/screenshots/npm-i-inquirer.PNG)

  ### `Jest version 8.2.4` - **REQUIRED** for testing
  
  * Follow the same methods from [Inquirer v8.2.4 Installation Section](#inquirer-version-824---required-to-prompt-questions) to reach this repository if you've already exited out of the command-line, then type in `npm i jest` and hit `Enter`.
  
  ![User installs inquirer using command line](./assets/screenshots/npm-i-jest.PNG)

  ## Usage - for the purposes of this demonstration, Git Bash will be used as my preferred terminal
  * A video of this application's usage can be viewed [here](https://drive.google.com/file/d/1Lc8BVYjoWV6CvlTr0bC05SQwWAiMjRhj/view). If the link is non-functional, a copy of the video can be found in the "assets" folder.

  * To use this application, start by using either of the two methods described in the [Inquirer v8.2.4 Installation Section](#inquirer-version-824---required-to-prompt-questions) to reach this repository through the preferred terminal.

  Method 1:

  ![User uses Visual Studio Code to access repository through external terminal](./assets/screenshots/External-Terminal-Method-1-1.PNG)

  ![Note the match from Visual Studio Code to the opened external terminal](./assets/screenshots/External-Terminal-Method-1-2.PNG)

  Method 2:

  ![User uses Change Directory (cd) to access repository through external terminal](./assets/screenshots/External-Terminal-Method-2.PNG)

  * Once this repository has been reached, type in `node index.js` into the terminal and hit `Enter`. Again, if you'd like, you may invoke using the default command prompt line instead. This will start the questions prompt. Answer the questions as according to the team member in question. This project will by default begin with the team manager role.
  
  ![Initializing the app with 'node index.js' in the external terminal, working in both Git Bash and Command Prompt terminal](./assets/screenshots/External-Terminal-Initializing.PNG)
  
  * Once invoked, a directory called `dist` will be created, if it doesn't exist already, as the user answers questions. This is where the generated `index.html` will be created and stored upon completion. Users can add as many engineers and interns as they would like, and can complete the team profile registration process by selecting `"I don't want to add any more team members."` Each profile completed will have the information stored in an array to be converted into HTML cards, pre-styled by Bootstrap.
  
  ![Repository before first invocation](./assets/screenshots/External-Terminal-Initializing-Pre-Questions.PNG)
    
  ![Repository after invocation, with a directory called 'dist' generated](./assets/screenshots/External-Terminal-Question-1.PNG)

  ![Option to end team profile registration by selecting "I don't want to add any more team members."](./assets/screenshots/No-More.PNG)

  ![The index.html file is generated in the 'dist' directory after selecting "I don't want to add any more team members."](./assets/screenshots/Done.PNG)

  ![The html file can be viewed in browser and has pre-styled setting using Bootstrap](./assets/screenshots/Final-HTML.PNG)
  
  * The manager will be asked for their name, id, email, and room number. The default for the id and room number is to only accept numerical answers. If your system has letters for either the identification system or the room numbers, please see the subsection [Alternatives](#alternatives) below usage.

  * Each name-based question has 4 validation messages. These validations also apply to the question "What is the intern's school?".
    - If the user does not capitalize the first letter of the input, a message will appear in the terminal saying "Remember to capitalize the beginning of your name".
    
        ![If the user does not capitalize the first letter of the name question input, an error message appears](./assets/screenshots/Name-Validation-1.PNG)
    
    - If the user does not enter any name, a message will appear in the terminal saying "Please enter your name".
    
        ![If the user does not enter any name, an error message appears](./assets/screenshots/Name-Validation-2.PNG)

    - If the user enters an input with numbers or just numbers, a message will appear in the terminal saying "Please change the name to letters only".
    
        ![If the user enters a name with numbers or just enters numbers as a name, an error message appears](./assets/screenshots/Name-Validation-3.PNG)
    
    - If the user tries to only enter spaces, or has a space preceding/proceeding the entry, a message will appear in the terminal saying "Enter at least a character that isn't a space, or remove the space that is preceding and/or proceeding the input". *Every non-number based question has this validation. Number-based questions have their own version that says "Please change the [property] to numbers only"*
    
        ![If the user only has spaces, or has a space starting/following the name entry, an error message appears](./assets/screenshots/Name-Validation-4.PNG)
  
  * Each ID-based question has 3 validation messages. Only the first two validations also apply to the question manager's office room number question. The third one is unique to the engineers' and interns' ID-based questions.
    - If there is no input, a message will appear in the terminal saying "Please enter your ID"
    
        ![If the user has no input for the ID, an error message appears](./assets/screenshots/ID-Validation-1.PNG)
        ![If the user has no input for the manager's office room number, an error message appears](./assets/screenshots/Room-Validation-1.PNG)
    
    - If the input contains a non-digit character (anything that isn't 0-9), a message will appear in the terminal saying "Please change the ID to numbers only"
    
        ![If the user enters white spaces or non-digit characters for the ID, en error message appears](./assets/screenshots/ID-Validation-2a.PNG)
        ![If the user enters letters and numbers for the ID, en error message appears](./assets/screenshots/ID-Validation-2b.PNG)
        ![If the user enters just letters for the ID, en error message appears](./assets/screenshots/ID-Validation-2c.PNG)

        ![If the user enters letters, white spaces, non-digit characters, or a combination of those with numbers for the manager's office room number, en error message appears](./assets/screenshots/Room-Validation-2.PNG)
    
    - If the user is inputting an engineer's or an intern's ID, that is a duplicate input of a previously registered team member's ID number, a message will appear in the terminal saying "That ID has already been registered, check if you have the right ID"

        ![If the user enters an ID that has belongs to a registered team member, an error message appears - Engineer](./assets/screenshots/ID-Validation-3a.PNG)
        ![If the user enters an ID that has belongs to a registered team member, an error message appears - Intern](./assets/screenshots/ID-Validation-3b.PNG)
    
  * Each email-based question has 3 validation messages.
    - If there is no input, a message will appear in the terminal saying "Please enter your email"
    
        ![If the user has no input for the email, an error message appears](./assets/screenshots/Email-Validation-1.PNG)
    
    - If the user does not have *both* an @ (at) symbol *and* a period, a message will appear in the terminal saying ""
    
        ![If the user has no @ (at) symbol in the email, an error message appears](./assets/screenshots/Email-Validation-2a.PNG)
        ![If the user has no period in the email, an error message appears - this email has the @ (at) symbol but no period](./assets/screenshots/Email-Validation-2b.PNG)
        ![If the user has no period in the email, an error message appears - this email has period but no the @ (at) symbol](./assets/screenshots/Email-Validation-2c.PNG)
    
    - If the user tries to only enter spaces, or has a in the email entry, a message will appear in the terminal saying "Check the input for spaces".
    
        ![If the user has a space starting the email entry, an error message appears](./assets/screenshots/Email-Validation-3a.PNG)
        ![If the user has a space in the middle of the email entry, an error message appears](./assets/screenshots/Email-Validation-3b.PNG)
        ![If the user has a space following the email entry, an error message appears](./assets/screenshots/Email-Validation-3c.PNG)
    
  * The engineer Git Hub username question just 2 validation messages.
    
    - If the user does not enter any username, a message will appear in the terminal saying "Please enter your engineer's GitHub username"
    
        ![If the user has no input for the GitHub username, an error message appears](./assets/screenshots/GitHub-Validation-1.PNG)
    
    - If the user tries to only enter spaces, or has a space preceding/in the middle/proceeding the GitHub username entry, a message will appear in the terminal saying "Check the input for spaces".
    
        ![If the user only has spaces, or has a space starting/following the Git Hub username entry, an error message appears](./assets/screenshots/GitHub-Validation-2.PNG)
  
  ### Alternatives 

  * If you'd like to validate your answer to check that it only has only capital letters, use the following code below. If anything in the string matches a lowercase letter, it will ask you to change your input. Failure of this validation check can be avoided by using the `string.toUpperCase()` method for the particular property of interest in the respective class's JS file in the lib directory, see [lib\Employee.js line 6](.\lib\Employee.js) for an example:
  
  <pre>
          validate: function (answer) {
            var capitalLettersOnly = /[a-z]/
            if (capitalLettersOnly.test(answer)) {
                return "Please change your answer to all caps."
            } else {
                return true
            }
        },
  </pre>
  
  * If your ID system has numbers, check the following:
    - Change the id property in [lib\Employee.js](.\lib\Employee.js) to `this.id = id;` to allow non-digit characters and prevent errors.
    - Change the 3 ID validation tests for each team role type (Manager, Engineer, Intern).
    - Change the 4 ID tests in each file from the [__tests__](.\__tests__) directory. Some sample tests have been provided and are currently commented out.
  
  * If your room numbering system has numbers, check the following:
    - Change the officeNumber property in [lib\Manager.js](.\lib\Manager.js) to `this.officeNumber = officeNumber;` to allow non-digit characters and prevent errors.
    - Change the manager's office room number validation test.
    - Change the office room number test in the [Manager.test.js](.\__tests__\Manager.test.js) file from the [__tests__](.\__tests__) directory. Some sample tests have been provided and are currently commented out.

  ## Credits
  * Card template provided by [Bootstrap](https://getbootstrap.com/):<br></br> https://getbootstrap.com/docs/5.3/components/card/
  
  * Nav bar template provided by [Bootstrap](https://getbootstrap.com/):<br></br> https://getbootstrap.com/docs/5.3/components/navbar/
  
  * Changing nav bar color information provided by [Bootstrap](https://getbootstrap.com/):<br></br> https://getbootstrap.com/docs/5.3/customize/color/
  
  * Changing text information provided by [Bootstrap](https://getbootstrap.com/):<br></br> https://getbootstrap.com/docs/5.3/utilities/text/#text-alignment
  
  * Badge template provided by [Bootstrap](https://getbootstrap.com/):<br></br> https://getbootstrap.com/docs/5.3/components/badge/
  
  * Changing class badge color and text color information provided by [Bootstrap](https://getbootstrap.com/):<br></br> https://getbootstrap.com/docs/5.3/utilities/colors/
  
  * List group template provided by [Bootstrap](https://getbootstrap.com/):<br></br> https://getbootstrap.com/docs/5.3/components/list-group/
  
  * Sending email through HTML anchor information provided by [W3docs](https://www.w3docs.com/):<br></br> https://www.w3docs.com/snippets/html/how-to-create-mailto-links.html
  
  * Javascript subclass 'extends' keyword supplemental lesson provided by [W3Schools](https://www.w3schools.com/):<br></br> https://www.w3schools.com/jsref/jsref_class_extends.asp#:~:text=The%20extends%20keyword%20is%20used,you%20create%20a%20new%20class.
  
  * Including 'https://' before ['www.(website).com'](#blank) to denote the URL is a full or absolute URL information provided by [W3 Schools](https://www.w3schools.com/):<br></br> https://www.w3schools.com/html/html_links.asp
  
  * Credit for checking if a certain directory doesn't exist already and creating it via Node goes to [chovy](https://stackoverflow.com/users/33522/chovy):<br></br> https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js

  * Capitalizing uppercase letters method information provided by [W3 Schools](https://www.w3schools.com):<br></br> https://www.w3schools.com/jsref/jsref_touppercase.asp#:~:text=The%20toUpperCase()%20method%20converts,not%20change%20the%20original%20string.
  
  * Using `toMatch()` Jest testing method information provided by [Jest](https://jestjs.io/):<br></br> https://jestjs.io/docs/expect#tomatchregexp--string
  
  * Using `toBe()` Jest testing method information provided by [Jest](https://jestjs.io/):<br></br> https://jestjs.io/docs/expect#tobevalue
  
  * Developing tests supplemental lesson provided by [Laith Academy](https://www.youtube.com/@laithacademy):<br></br> https://www.youtube.com/watch?v=ajiAl5UNzBU

  * Name validation to check for numbers in input credit to [Usama Tahir](https://stackoverflow.com/users/7671569/usama-tahir):<br></br> https://stackoverflow.com/questions/5778020/check-whether-an-input-string-contains-a-number-in-javascript

  * Regular Expression (Regex) supplemental lesson provided by [Computer Hope](https://www.computerhope.com/):<br></br> https://www.computerhope.com/jargon/r/regex.htm

  * Regex cheat sheet provided by [Cheatography](https://cheatography.com/):<br></br> https://cheatography.com/davechild/cheat-sheets/regular-expressions/

  * Using `RegExp.prototype.test()` to check a string for a regular expression match supplemental lesson provided by [Mozilla](https://developer.mozilla.org/en-US/):<br></br> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test

  * Using `include()` method to check if a value is already in an Array information provided by [W3 Schools](https://www.w3schools.com):<br></br> https://www.w3schools.com/jsref/jsref_includes_array.asp

  ## Test Instructions

  To run a test, use the command line to reach the testing directory (`__tests__`) within this repository and invoke Jest's testing capabilities with `npm test` or `npm run test`, all four tests will be ran. Again, make sure you have Jest installed with first.
  
  ![Test can be invoked with `npm test`](./assets/screenshots/npm-test-all.PNG)

  ![`npm run test` also invokes testing](./assets/screenshots/npm-test-all.PNG)

  If you would like to run one of the tests, use `npm test [testfilename]`. For example, if you'd like to just run the Employee class test file, you would type in `npm test Employee.test.js` or `npm test Employee`.
  
  ![Single test being run](./assets/screenshots/npm-test-one.PNG)

  To run multiple tests, separate test names with a space. For example, `npm test Employee Manager` will run both the Employee tests and Manager tests.

  ![Multiple tests being run](./assets/screenshots/npm-test-multiple.PNG)
    
  ## Questions
  
  If you have any questions, my GitHub profile is [www.github.com/leeclaire156](www.github.com/leeclaire156), and my email is [lee.claire156@gmail.com](mailto:lee.claire156@gmail.com).
