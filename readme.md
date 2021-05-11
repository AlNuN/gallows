# Gallows

Alura's final project of its JavaScript course

## Rules

- Only ECMAScript 5
- Follow step by step

## 1st Step
- Make the sprite change in 0.5s iterations from start to end

- Add `reset()` function to go back to first frame;
- Add `isFinished()`, which returns `boolean`;

## 2nd Step
- Create a class to manipulate the game logic named `jogo.js`

- Add `setPalavraSecreta(palavra)` to set a word to be guessed
- Add `getLacunas()` to get an array filled with an empty string for each letter of the chosen word
- Add `getEtapa()`, that returns a number that represents the game state

Now, the main function in `jogo.js` receives a sprite object as a parameter

- Add `processaChute(chute)` function. It should fill the letter in `lacunas` if the guess is right or make the hanged man sprite show a new limb
- Add `ganhou()`, `perdeu()`, `ganhouOuPerdeu()`, `reinicia()` to: know if the player won, know if the player lose, know if the game is over and to reset all game state

## 3rd Step

- Create a class to manipulate the DOM named `controller.js`

- Add `exibeLacunas` to show a little square for each letter in lacunas
- Add `mudaPlaceHolder(texto)` to change entrada placeholder
- add `guardaPalavraSecreta()` to register the word in game logic, and call the other 2 functions

- Add `leChute` to process the guess and verify win condition
