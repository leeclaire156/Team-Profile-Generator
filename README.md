# Team Profile Generator
  
  ## Description

  This project is a Node.js command-line application that generates an HTML page, styled by [Bootstrap](https://getbootstrap.com/), for a team of employees with a summary of each team member based on user input. It also utilizes Jest to test the methods used to set and return the team's information.
  
  Managers utilizing this generator will be able to make a webpage of them and their team that will display their name, role, ID, and email. The emails can be clicked on to open the default email application on the local device and write an email to the selected team member's email. In addition, managers will be able to display their office's room number, their engineer's GitHub link, and their intern's current school.
  
  There are also validation checks for each of the questions asked to make sure the answers given are valid entries, to prevent incorrect data from being entered (i.e. numbers in a name or no name at all). In addition there will be tests available for the manager to use under the test folder.

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
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

  ## Usage
  * A video of this application's usage can be viewed [here](https://drive.google.com/file/d/1pbLwfHMrcf_RUMx4d5a3OQEtI1hKC_xq/view). If the link is non-functional, a copy of the video can be found in the "assets" folder.

  * To use this application, start by using either of the two methods described in the [Inquirer v8.2.4 Installation Section](#inquirer-version-824---required-to-prompt-questions) to reach this repository through the preferred terminal.

  Method 1:
  ![User uses Visual Studio Code to access repository through external terminal](./assets/screenshots/External-Terminal-Method-1-1.PNG)

  ![Note the match from Visual Studio Code to the opened external terminal](./assets/screenshots/External-Terminal-Method-1-2.PNG)

  Method 2:

  ![User uses Change Directory (cd) to access repository through external terminal](./assets/screenshots/External-Terminal-Method-2.PNG)

  * Once this repository has been reached, type in `node index.js` into the terminal and hit `Enter`. This will start the questions prompt. Answer the questions as according to the project in question.
  
  ![Initializing the app with 'node index.js' in the external terminal](./assets/screenshots/External-Terminal-Initializing.PNG)
  
  * If you'd like to validate your answer to check that it only has only capital letters, use the following code below. If anything in the string matches a lowercase letter, it will ask you to change your input. Failure of this validation check can be avoided by using the `string.toUpperCase()` method for the particular property of interest in the respective class's JS file in the lib directory, see [lib\Employee.js line 6](.\lib\Employee.js) for an example:
  ```
          validate: function (answer) {
            var capitalLettersOnly = /[a-z]/
            if (capitalLettersOnly.test(answer)) {
                return "Please change your answer to all caps."
            } else {
                return true
            }
        },
  ```

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