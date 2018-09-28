import React, { Component } from 'react';
import Header from './Header';
import SectionProject from './SectionProject';
import SectionSkill from './SectionSkill';
import SectionContact from './SectionContact'; 

class App extends Component {

  constructor(props){ 
    super(props)
    this.up = this.up.bind(this)
  }

  up(e)
  {
    let element = e.target.getAttribute('data-section')
    if(e.target.tagName == 'path')
    {
      element = e.target.parentNode.getAttribute('data-section')
    }
      document.getElementById(`${element}`).scrollIntoView(
        {
          behavior : 'smooth'
        });
    // console.log(e.target);
  }
  render() {
    return (
      <div>
        <Header/>  
        <SectionProject OnClickUp = {this.up}/>
        <SectionSkill OnClickUp = {this.up}/>
        <SectionContact OnClickUp = {this.up}/>
      </div>
    );
  }
}

export default App;
