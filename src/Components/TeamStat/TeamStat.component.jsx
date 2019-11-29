/**
 * TeamStat Component
 * @export
 * @param {TeamStatProps} props The props for `<TeamStat />`.
 * @returns {JSX.Element} The `<TeamStat />` component.
 */

import React from 'react'
import { useTeamStatStyles } from './TeamStat.component.styles'
import { propTypes, defaultProps } from './TeamStat.component.props'

import Slidein from '../Slidein/Slidein.component'
import Fadein from '../Fadein/Fadein.component'
import Scorebox from '../Scorebox/Scorebox.component'

const TeamStat = ({show, teamstat, delay}) => {
  const { team, stats } = teamstat || {};
  const classes = useTeamStatStyles();
  return (
    <div className={classes.root}>
      <Slidein show={show} animation={{delay: delay}} ><Scorebox text={team || ''} color='Blue'/></Slidein>
      <Fadein show={show} animation={{delay: delay + 1}} ><Scorebox text={stats || ''} color='Red'/></Fadein>
    </div>
  )
}

TeamStat.propTypes = propTypes;
TeamStat.defaultProps = defaultProps;

export default TeamStat;