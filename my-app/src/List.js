import React,{Component} from 'react';
import Person from './Person'

export default class PersonList extends Component {
    render(){
        let entries = this.props.entries;
        return(
            <div>{entries.map((e) =>
                <Person
                    name={e.name}
                    id={e.id}
                    deleteEntryFromList={this.props.deleteEntryFromList}
                    updateEntry={this.props.updateEntry}
                    key={e.id}/>
            )
            }
            </div>
        )
    }
}