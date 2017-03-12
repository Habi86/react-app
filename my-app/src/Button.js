import React,{Component} from 'react';

export default class Button extends Component {
    render() {
        return(
            <button
                onClick={this.props.onClick}
                value={this.props.value}>
                {this.props.title}
            </button>
        )
    }
}