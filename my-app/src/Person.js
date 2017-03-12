import React,{Component} from 'react';
import Button from './Button.js'
import Input from './input.js'

export default class PersonEntry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEdit: false,
            editValue: this.props.name
        }
    }

    updateCurrentValue(e){
        this.setState({
            editValue: e.target.value
        })
    }

    render() {
        return(
            <div>
                {this.props.name + " "}
                    <Button
                        title="x"
                        value={this.props.id}
                        onClick={ (e) =>{
                            this.props.deleteEntryFromList(e);
                        }
                        }/>
                    { this.state.isEdit ?
                        <div>
                            <Input
                                value={this.state.editValue}
                                onChange={this.updateCurrentValue.bind(this)}
                            />
                            <Button title="save" value={this.props.id}
                                    onClick={ () =>{
                                    this.setState({
                                        isEdit: false
                                    })
                                    this.props.updateEntry(this.props.id, this.state.editValue)
                                }
                                }/>
                        </div>
                        :
                        <Button
                            title="edit"
                            value={this.props.id}
                            onClick={ () =>{
                                this.setState({
                                    isEdit: true
                                })
                            }
                            }/>
                    }
            </div>
        )
    }
}