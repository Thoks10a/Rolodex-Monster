import {Component, React} from 'react'
import './card.style.css'



class CardComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name,email,id} = this.props.monster;
        return(
            <div key={id} className='card-container'>
            <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            <h1>{name}</h1>
            <h3>{email}</h3>
        </div>
    )
    }
}


export default CardComponent