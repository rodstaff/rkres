import React from 'react';
import Edu from '../components/edu';
import Intro from '../components/intro';
import WD from '../components/work/wd';
import SM from '../components/work/sm';
import MM from '../components/work/mm';
import PN from '../components/work/pn';
import PS from '../components/work/ps';
import TI from '../components/work/ti';

export default class Home extends React.Component {
  render () {
  	return (
      <div>
        <hr />
        <Intro />
        <WD />
        <SM />
        <MM />
        <PN />
        <PS />
        <TI />
        <Edu />
      </div>
  	);
  }
}