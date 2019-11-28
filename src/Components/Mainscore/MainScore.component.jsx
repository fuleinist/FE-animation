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
      <Slidein show={show} animation={{delay: 1}}>KC</Slidein>
      <Slidein show={show} animation={{delay: 0}}>0 - 4</Slidein>
      <Slidein show={show} animation={{delay: 1}}>GG</Slidein>
    </div>
  )
}

export default MainScore;