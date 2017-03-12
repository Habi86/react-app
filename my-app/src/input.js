import React,{Component} from 'react';

export default class Input extends Component {
    render() {
        return(
            <input
                type="text"
                onChange={this.props.onChange}
                placeholder={this.props.placeholder}
                value={this.props.value}
                key={this.props.index} />
        )
    }
}