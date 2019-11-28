/**
 * TeamStat Component
 * @export
 * @param {TeamStatProps} props The props for `<TeamStat />`.
 * @returns {JSX.Element} The `<TeamStat />` component.
 */

import React from 'react'
import { useTeamStatStyles } from './TeamStat.component.styles'

import Slidein from '../Slidein/Slidein.component'
import Fadein from '../Fadein/Fadein.component'

const TeamStat = ({animation, show}) => {
  const classes = useTeamStatStyles();
  return (
    <div className={classes.root}>
      <Slidein show={show} animation={{delay: 2}} >Kingston City</Slidein>
      <Fadein show={show} animation={{delay: 2}} >Red Card</Fadein>
    </div>
  )
}

export default TeamStat;