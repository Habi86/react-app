import React from 'react';
import ReactDOM from 'react-dom';


// function Person(properties) {
//     return <div>Name: {properties.name}</div> //über interpolation mit geschwungene Klammern,   dynamisches markiert er im DOM und nur dieser wird geändert
// }

//mit ES6 descrution
function Person({name}) {
    return <div>Name: {name}</div> //über interpolation mit geschwungene Klammern,   dynamisches markiert er im DOM und nur dieser wird geändert
}

//Typ des properties definieren:
Person.propTypes = {
    name: React.PropTypes.string //erlaube nur typ string; wirft in der console Fehler
}


// const List = React.createClass({ //Konstrukt ---> alte Version wird sich ändern
//
//
//     render() {
//         return <div>List</div>
//     }
// })


class App extends React.Component {

    constructor() { //wird aufgerufen wenn neue instanz erstellt wird

        super();
        this.state = {
            entries: ['Stefanie', 'Sepp', 'Alex']
        }
    }

    render() {
        return <div>
            <Input/><Button onClick={(e) => {console.log('click')}}/>
            <List entries={this.state.entries}/>
        </div>
}



//
// function Catalog({children}) {
//     const persons = ['Stefanie', 'Sepp', 'Alex']
//
//     return <div>{persons.map((person, index) => <Person key={index} name={person}/>)}</div> //beim itereieren von array 1. = value 2. index
// }


function Input(){
    return <input type="text" onChange={(e) => console.log(e.target.value)}/>
}

function Button(onClick){
    return <button
        //ref={(node) => console.log(node)} //wan brauch ich das ^^nochmal checken

        //onClick={(e) => {console.log('click')}}>+</Button> //hier wird closure definieren
        onClick={onClick}>+</button>

}

function List({entries}) {
    return <div>
        {
            entries.map(
                (entry, index) =>
                    <Person key={index} name={entry}/>
            )
        }
    </div>
}
}




ReactDOM.render(

    //React.createElement('div', null, 'test'), //Zustand in dem Fall null
    //<div>test</div>,//ist ident mit Zeile 6)

    //<Person name={"Name"}/>,

    //Komponente verschateln a
    // <Catalog>
    // </Catalog>

    <App />

    ,
    document.getElementById('root')
);
