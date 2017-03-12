import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Input from './input.js'
import Button from './Button.js'
import List from './List.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            entries: [{
                id: 0,
                name: 'Vera'
            },{
                id: 1,
                name: 'Nico'
            },{
                id: 2,
                name: 'Steffi'
            }],
            inputValue: '',
            isSearching: false
        }
    }

    newIdForEntry() {
        let arrLength = this.state.entries.length - 1
        return this.state.entries[arrLength].id + 1
    }

    deleteEntryFromList(e) {
        let value = e.target.value;
        this.setState({
            entries: this.state.entries.filter((e) => {
                return e.id != value;
            })
        })
    }

    updateCurrentValue(e){ //get Value from Input
        this.setState({
            inputValue: e.target.value
        })
    }

    addEntry(){
        this.setState({
            entries:[
                ...this.state.entries,
                {
                    id: this.newIdForEntry(),
                    name: this.state.inputValue
                }
            ]
        })
    }

    updateEntry(id, name){
        this.setState({
            entries: this.state.entries.map((entry) => {
                if(entry.id == id){
                    entry.name = name;
                }
                return entry;
            })
        })
    }

    searchEntryFromList() {
        this.setState({
            searchEntries: this.state.entries.filter((e) => {
                return e.name === this.state.inputValue;
            })
        })
    }

    render() {
        return (
            <div className="body">
                <Input
                    value={this.props.value}
                    onChange={this.updateCurrentValue.bind(this)}
                />
                <Button
                    title="add"
                    onClick={this.addEntry.bind(this)}
                />
                <Button
                    title={this.state.isSearching ? "cancel" : "search"}
                    onClick={ () =>{
                        if(!this.state.isSearching){
                            this.setState({ isSearching: true });
                            this.searchEntryFromList();
                        } else{
                            this.setState({ isSearching: false });
                        }
                    }
                    }/>
                <List
                    entries={this.state.isSearching ? this.state.searchEntries : this.state.entries}
                    deleteEntryFromList={this.deleteEntryFromList.bind(this)}
                    updateEntry={this.updateEntry.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
);