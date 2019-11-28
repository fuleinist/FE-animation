/**
 * Scoreboard Component
 * @export
 * @param {SlideshowProps} props The props for `<Scoreboard />`.
 * @returns {JSX.Element} The `<Scoreboard />` component.
 */
 
import React, { useState } from 'react'
import { useScoreboardStyles } from './Scoreboard.component.styles'

import Mainscore from '../Mainscore/Mainscore.component'
import TeamStat from '../TeamStat/TeamStat.component'

const animation = [
  {animation: 'main', delay: 0},
  {animation: 'teamStat', delay: 1},
]

const Scoreboard = () => {
  const classes = useScoreboardStyles();
  const [show, setShow] = useState(false);
  return (
    <div className={classes.root}>
      <Mainscore show={show} animation={animation[0]} />
      <TeamStat show={show} animation={animation[1]} />
      <button onClick={()=>setShow(!show)}>{!show ? 'show' : 'hide'}</button>
    </div>
  )
}

export default Scoreboard;