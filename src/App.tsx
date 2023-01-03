import React, { useEffect, useState, useCallback } from 'react'
import words from "./wordList.json"
import './app.scss'
import HangmanDraft from './components/HangmanDraft/HangmanDraft'
import Word from './components/Word/Word'
import Keyboard from './components/Keyboard/Keyboard'

const App = () => {
  const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)])
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isLoser = (incorrectLetters.length >= 6)
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetters = useCallback((letter: string) => {
    if(guessedLetters.includes(letter) || isWinner || isLoser) return
    setGuessedLetters([...guessedLetters, letter])
  }, [guessedLetters, isWinner, isLoser])
  

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if(!e.key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetters(e.key)
    }
    document.addEventListener("keypress", handler)
  
    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])
  
  
  return (
    <div className='app'>
      <div className='app__result'>
        {isWinner && 'WINNER!'}
        {isLoser && 'NICE TRY!'}
      </div>
      <HangmanDraft numberOfGuesses={incorrectLetters.length} />
      <Word 
        revealWord={isLoser}
        wordToGuess={wordToGuess} 
        guessedLetters={guessedLetters} 
      />
      <div className='app__keyboard'>
        <Keyboard
          disabled={isWinner || isLoser}
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))} 
          inactiveLetters={incorrectLetters}
          addGuessedLetters={addGuessedLetters}
        />
      </div>
    </div>
  )
}

export default App