# Hangman - Guess word
## Non responsive React + Typescript Web app

### How to run
Enjoy the game - https://hangman-guess-word.vercel.app/ :slightly_smiling_face:
Or - npm start

### About
This is a simple front-end app created using React and Typescript.

### Game rules
The point of the game is to enter letters using the computer keyboard or the keyboard that inerface provides and guess the hidden word.
Every time you enter a letter that the hidden word does not contain, you have made a mistake. With every mistake, a body part of a hangman appears on the interface.
You can make no more than 5 mistakes. After the 6th mistake, the word you should have guessed appears on the interface with the marked letters you didn't guessed and the hangman is unfortunately dead :disappointed:

### Prerequisites
List of words user needs to guess is provided from wordList.json file.
App contains 3 main components:
- Hangman Draft - drawing of a hangman with each body part as component
- Word - hidden word that reveals the letters you guessed
- Keyboard