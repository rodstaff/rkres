import React from 'react';
import Sum from '../components/intro/sum';
import Skills from '../components/intro/skills';
import WD from '../components/work/wd';
import CD from '../components/work/cd';
import BD from '../components/work/bd';
import PE from '../components/work/pe';
import Edu from '../components/edu';

export default class Home extends React.Component {
  render () {
  	return (
      <div>
        <hr />
        <Sum />
        <Skills />
        <WD />
        <CD />
        <BD />
        <PE />
        <Edu />
      </div>
  	);
  }
}