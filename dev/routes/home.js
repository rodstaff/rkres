import React from 'react';
import Sum from '../components/intro/sum';
import Skills from '../components/intro/skills';
import WD from '../components/work/wd';
import SM from '../components/work/sm';
import MM from '../components/work/mm';
import PN from '../components/work/pn';
import PS from '../components/work/ps';
import TI from '../components/work/ti';
import Edu from '../components/edu';

export default class Home extends React.Component {
  render () {
  	return (
      <div>
        <hr />
        <Sum />
        <Skills />
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