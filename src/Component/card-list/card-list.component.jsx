import {Component, React} from 'react'
import './card-list.style.css'
import CardComponent from "../card/card.component";


class CardListComponent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {monsters} = this.props

        return(
            <div className='card-list'>
                {monsters.map((monsters) => {
                    //const {name,email,id} = monsters;
                    return(
                        <CardComponent monster={monsters}/>
                )})}
            </div>
    )
    }
}

export default CardListComponent;