/**
 * MainScore Component
 * @export
 * @param {MainScoreProps} props The props for `<MainScore />`.
 * @returns {JSX.Element} The `<MainScore />` component.
 */

import React from 'react'
import { useMainScoreStyles } from './MainScore.component.styles'

import Slidein from '../Slidein/Slidein.component'

const MainScore = ({animation, show}) => {
  const classes = useMainScoreStyles();
  return (
    <div className={classes.root}>
      <Slidein show={show} animation={{delay: 0.6, side: 'left'}}>KC</Slidein>
      <Slidein show={show} animation={{delay: 0, side: 'bottom'}}>0 - 4</Slidein>
      <Slidein show={show} animation={{delay: 0.6, side: 'left'}}>GG</Slidein>
    </div>
  )
}

export default MainScore;