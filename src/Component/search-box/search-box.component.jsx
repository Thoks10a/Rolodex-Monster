import {React, Component} from 'react'
import './search-box.style.css'


class SearchBoxComponent extends Component {
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div>
                <input className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeHolder} onChange={this.props.onChangeHandler}/>
            </div>
        )
    }
}


export default SearchBoxComponent