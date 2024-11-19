# ☕ Chai aur Javascript 

<div align="left">
  <i>umairabbasi</i>
</div>

<br/>

## Lecture 1:

- Getting confidence in software development is very important
- Doing project will only gives you the confidence
- Confidence will only clear up the interviews
- No extra tool required to setup to learn javascript

<hr/>
<br/>

## Lecture 2: Setting up local environment

- Javascript execution is same for browser or running on any environment
- Every source code has meaning in javascript, like console.log() has some meaning in javascript, it is syntax in programming language
- Every programming language comes with some extenstion like .js, .py
- Every software has capability to understand the syntax whether it is .js or .py, which we call interpretor or compiler
- The compiler / interpretor was hidden in browser but now taken out in nodejs enviroment
- Now we no need to write, index.html and create the seaprate js file and add in script, as it was attached with broweser.
- Now we can run javascript directly with node environment, Hence Javascript is used everywhere like in frontend, backend etc
- Install the nodejs from nodejs.org and run in the local machine
- For writing the code use, VS Code, as it very popular now a days, it is from microsoft
- VS Code will help in color correction, indentation etc
- Go to view ➜ terminal, here you can see the terminal
- Check whether node is installed or not: node -v, our work done, if we get some number like 18, then we are ok
- To execute the code, we use: node filename

<hr/>
<br/>

## Lecture 3: Github

- We have lot of online code execution environment available like Github.
- Lets see, how can we setup the code environment in Github,

  - Go to Github and create the account
  - Create new repository ➜ code-with-javascript-one
  - Create the **README.md** and create the repository
  - There are different to use Github, but here we will see codespace
  - click on code ➜ codespaces
  - We will get the vscode here, here wee will get the computer like environment
  - Here click file ➜ view ➜ command palletter ➜ write 'Container' ➜ Add Dev container Configuration Files
  - It means, we are adding the configuration files
  - Click Show all configuration ➜ node.js & Javascript ➜ click default ➜ ok ➜ rebuild ➜ it will add some execution files
  - How to push the code to the github:
    - 1. click on source control ➜ add the file on + click ➜ add message ➜ click on commit
    - 2. click on triple dot ➜ click on push
        - Reload the github to get the files updated
        - To stop the github codespaces
        - Click on codespace ➜ see owned by 'username' on right side ➜ click on 3 dot ➜ delete the working directory ➜ ok
        - We can start the machine when needed


<hr/>
<br/>


## Lecture 5: Datatypes

- Prefer to practice on keyboard rather then taking notes on paper, write notes here itself so to remember
- **"use strict"** if we use above 2 words, it means it is newer version of javascript
- alert("hello") if we run the code, it ll given an error saying node is not defined, as js engine is hidden in browser ➜ it means, to run alert() has different way ti run it.
- In coding readability is very important ans it should be future proof
  For documentation prfer mdn (mozilla documentation)
- Original documenataion would be find in tc39.es
- ECMA Script is the standard way of writing javscript
- **For Example:**  if we write loop, then we should write in this way etc
- In js , we have different datatype,
- Primitive Datatype:
- Like number, string, boolean, null, undefined, bigInt, symbol
- Prefer to use double quotes for string datatype
- Boolean will say yes or no, it has only 2 values
- null ➜ it is standalone value, yes it is datatype as well
- null is representaiton of empty value
- null means value is empty, example, like giving empty value while monitoring the temp, as we cant give 0, as 0 has some value in temp scale
- ndefined ➜ means some value is not defined
- Symbol datatype is used to fincdout the uniquness ➜ it is used in react, to find the component
- typeof ➜ to know the type of any variable, we use typeof
- **Example:**
  ```javascript
  console.log(typeof "umairabbasi") ➜ string

<hr/>
<br/>