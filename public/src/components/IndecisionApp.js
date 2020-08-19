import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }));
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) =>  optionToRemove !== option)
    }));
  }

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({ 
      selectedOption: option 
    }));
  }

  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } else {
      this.setState((prevState) => ({
        options: prevState.options.concat(option)
      }));
    }
  }

  //Initialize
  componentDidMount() {
    try {
      const optionsJSON = localStorage.getItem('options');
      if(optionsJSON)
      {
        const options = JSON.parse(optionsJSON); 
        this.setState(() => ({ options }));
      }
    } catch (error) {

    }
  } 

  //When component is updated or state/prop value changes
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const optionsJSON = JSON.stringify(this.state.options);
      localStorage.setItem('options', optionsJSON);
    }
  }

  //When component will be destroyed
  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  render() {
    const subtitle = 'Put your life in the hands of the computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <main className="container">
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick} 
          />
          <div className="widget">
            <Options 
              options={this.state.options} 
              handleDeleteOptions={this.handleDeleteOptions} 
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </main>
      </div>
    );
  }
}