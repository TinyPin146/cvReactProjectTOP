import React, {Component} from "react";
import './CSS/Form.css'

import uniqid from 'uniqid';

import Input from "./Input";

class Form extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            inputStates: [],
            id: uniqid(),
        }
        this.updateFormState = this.updateFormState.bind(this);
        this.updateAppState = this.updateAppState.bind(this);
    }

    updateFormState(childState) {
        const {inputStates} = this.state;
        const inputIDs = inputStates.map(input => input.id)
        if (inputIDs.includes(childState.id)) {
            const updatedInputs = inputStates.map(state => {
              if (state.id === childState.id) return childState;
              return state;
            });
            this.setState({ inputStates: updatedInputs});
            return;
        };
      
        this.setState({ inputStates: [...this.state.inputStates, childState] });
      }

      updateAppState(e) {
        e.preventDefault();

        const {updateParentState} = this.props;
        console.log(this.props);

        updateParentState(this.state);
      }


    render() {
        const {formType} = this.props;

        const basicDataForm = (
            <form onSubmit={this.updateAppState}>
                <Input updateParentState={this.updateFormState} type='text' name='first-name' />
                <Input updateParentState={this.updateFormState} type='text' name='last-name' />
                <Input updateParentState={this.updateFormState} type='email' name='email-address' />
                <Input updateParentState={this.updateFormState} type='tel' name='phone-number' />
                <button>Done</button>
            </form>
        )

        const educationDataForm = (
            <form onSubmit={this.updateAppState}>
                <Input updateParentState={this.updateFormState} type='text' name='school-name' />
                <Input updateParentState={this.updateFormState} type='text' name='title-of-study' />
                <Input updateParentState={this.updateFormState} type='number' name='start-of-studies' />
                <Input updateParentState={this.updateFormState} type='number' name='finish-of-studies' />
                <button>Done</button>
            </form>
        )

        const workDataForm = (
            <form onSubmit={this.updateAppState}>
                <Input updateParentState={this.updateFormState} type='text' name='school-name' />
                <Input updateParentState={this.updateFormState} type='text' name='position-title' />
                <Input updateParentState={this.updateFormState} type='textarea' name='role-description' />
                <Input updateParentState={this.updateFormState} type='number' name='start-of-work' />
                <Input updateParentState={this.updateFormState} type='number' name='finish-of-work' />
                <button>Done</button>
            </form>
        )

        switch (formType) {
            case 'basicDataForm': 
                return basicDataForm;
            case 'educationDataForm':
                return educationDataForm
            case 'workDataForm':
                return workDataForm
    
            default: 
                console.log('Shit');
                break;
        }
    }
}

export default Form