
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            entries: ['Stefanie', 'Sepp', 'Alex'],
            currentValue: ''
        }
    }
    updateCurrentValue = (e) => { //property initial analyzer
        this.setState({
            currentValue: e.target.value
        })

        //console.log()hier ein console log ist nicht richtig weil es asynchron läuft und man sich nicht sicher ein kann das es der aktuelle zustand ist
        //besser:
    }

    render() {
        return <div>
            <Input value={this.state.currentValue} onChange={this.updateCurrentValue}/><Button onClick={(e) => {
                this.setState({
                    //entries: [...this.state.entries, 'Dieter']
                    entries: [...this.state.entries, this.updateCurrentValue]

                })
                //this.state.entries.push('Dieter') //allein das geht nicht - react muss sich updaten- weil hey da is was neues dazu gekommen :D

                //weil wir beim array ein index verwenden, wissen wir dass sich nichts geändert hat - aber wir wissen die anzahl hat sich geändert - deshalb weiß react dass dieter neu dazu gehört
                console.log('click')}}/>
            <List entries={this.state.entries}/>
        </div>
    }
}

function Input({onChange, value}) {
    return <input type="text" value={value} onChange={(e) => console.log(e.target.value)}/>
}

function Button({onClick}) {
    return <button onClick={onClick}
    >+</button>
}

function List({entries}) {
    return <div>
        {
            entries.map(
                (entry, index) =>
                    <Person key={index} name={entry}/>)
        }
    </div>
}

function Person ({name}) {
    return <div>Name: {name}</div>
}
Person.propTypes = {
    name: React.PropTypes.string
}

ReactDOM.render(
    <App />
    ,
    document.getElementById('root')
);