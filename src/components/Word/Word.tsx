import React from "react";
import "./word.scss";

type WordProps = {
  revealWord?: boolean,
  wordToGuess: string,
  guessedLetters: string[]
}

const Word = ({ revealWord = false, wordToGuess, guessedLetters }: WordProps) => {
  const renderWord = wordToGuess.split("").map((letter, index) => {
    let letterClass = (guessedLetters.includes(letter) || revealWord) ? "" : "word__letter-visible"
    if(!guessedLetters.includes(letter) && revealWord){
      letterClass += 'word__letter-visible--red'
    }

    return(
      <span className="word__letter" key={index}>
        <span className={letterClass}>
          {letter}
        </span>
      </span>
    )
  });

  return <div className="word">{renderWord}</div>;
};

export default Word;
