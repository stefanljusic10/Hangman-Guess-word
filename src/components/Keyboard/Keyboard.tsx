import React from 'react'
import { KEYS } from '../../lettersList'
import './keyboard.scss'

type KeyboardProps = {
  disabled?: boolean,
  activeLetters: string[],
  inactiveLetters: string[],
  addGuessedLetters: (letter: string) => void
}

const Keyboard = ({ disabled = false, activeLetters, inactiveLetters, addGuessedLetters }: KeyboardProps) => {
  // console.log(KEYS);
  
  return (
    <div className='keyboard'>
      {KEYS.map(key => {
        const isActive = activeLetters.includes(key)
        const isInactive = inactiveLetters.includes(key)
        const keyboardClass = 
          isActive ? 
          'keyboard__letter keyboard__letter-active' : isInactive ? 
          'keyboard__letter keyboard__letter-inactive' : 'keyboard__letter'

        return(
          <button
            onClick={() => addGuessedLetters(key)}
            className={keyboardClass}
            disabled={isInactive || isActive || disabled}
            key={key}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}

export default Keyboard