import React from 'react'
import Head from './Body/Head'
import LeftArm from './Body/LeftArm'
import LeftLeg from './Body/LeftLeg'
import RightArm from './Body/RightArm'
import RightLeg from './Body/RightLeg'
import Torso from './Body/Torso'
import './hangmanDraft.scss'

type HangmanDraftProps = {
  numberOfGuesses: number
}

const HangmanDraft = ({ numberOfGuesses }: HangmanDraftProps) => {
    const bodyParts = [<Head />, <Torso />, <LeftArm />, <RightArm />, <LeftLeg />, <RightLeg />]

  return (
    <div className='hangmanDraft'>
        <div className='hangmanDraft__verticalPart'></div>
        <div className='hangmanDraft__horizontalPart'></div>
        <div className='hangmanDraft__horizontalStand'></div>
        <div className='hangmanDraft__verticalStand'></div>
        {bodyParts.slice(0, numberOfGuesses).map(part => part)}
    </div>
  )
}

export default HangmanDraft