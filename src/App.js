import {Component} from 'react';
import './App.css';
import CardListComponent from "./Component/card-list/card-list.component";
import SearchBoxComponent from "./Component/search-box/search-box.component";

class App extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            monsters: [], searchString: '',
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => this.setState(() => {
                return {monsters: users}
            }), () => {
                console.log(this.state)
            })
    }

    onSearchChange = (event) => {
        const searchString = event.target.value.toLowerCase()
        //retorna os monstros filtrado
        this.setState(() => {
            return {searchString: searchString}
        })
    }

    render() {
        const {monsters, searchString} = this.state
        const {onSearchChange} = this

        const filteredMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().includes(searchString)
        })

        return (<div className="App">
            <h1 className='app-title'>Monsters Rolodex</h1>
            {/*<input className='search-box' type='text' placeholder='search monsters...' onChange={onSearchChange}/>*/}
            <SearchBoxComponent className='monster-search-box' placeHolder='Search Monster...'
                                onChangeHandler={onSearchChange}/>
            <CardListComponent monsters={filteredMonsters}/>
            {/*{filteredMonsters.map((monster) => {
            return <div key={monster.id}><p>{monster.name}</p><p>{monster.username}</p><br/></div>
          })}*/}
        </div>);
    }
}

export default App;
