## Boggle App

**Boggle** is a word game invented by **Allan Turoff**. The game is played using a plastic grid of lettered dice, in which players attempt to find words in sequences of adjacent letters.

### About Boggle

1. [Boggle - wikipedia page](https://en.wikipedia.org/wiki/Boggle)
2. [Existing Boggle Implementation](https://www.wordplays.com/boggle)

### About Boggle App
This app is an attempt to simulate the Boggle game play.
The app is being built in React. The project was created using ```create-react-app``` starter template. Refer [https://reactjs.org/docs/create-a-new-react-app.html#create-react-app](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) for more details.

## Deployment 
The app is deployed on github pages.
[https://ysumit99.github.io/boggle/)](https://ysumit99.github.io/boggle/)


### Usage

clone the repo and start playing.

### run in development mode
```js
npm start
```

### build for deploy
```js
npm run build
```

### deploy in production
```js
npm run deploy 
```

## Requirement Gathering

### Main Features

1. Build the 5X5 board with random letters.
2. Users would be able to select the meaningful Words ( **length between 3 and 5** ).
3. Someway of highlighting the selected tiles.
4. List of Correct/Incorrect Words.

### Bonus

1. Allow typing the word
2. Rotate the boggle board
3. On hover of a word in the List of words, highlight the path of the word on the board.

## Analysis

**Feature 1: Build the 5X5 board**

This feature can be approached in 2 ways.

1. Build a board and fill it with 25 random letters. To make selection of more
   meaningful words possible, we can take into account the frequency of alphabets in English.
   [Cornell University's Link on cryptography](http://pi.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html)

2. Have a large pool of words. For every game play, randomly select some of the words from the pool
   and fill the board with these words along with a bunch of meaningless words thrown in the mix.

Lets implement the above feature...


