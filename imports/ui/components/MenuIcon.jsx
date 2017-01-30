import React, {Component} from 'react'
import { Link } from 'react-router';

export default class MenuIcon extends Component {
    constructor(props) {
        super(props)
    }

    render()
    {
        return (
            <div id="menu-icon">
                <Link to={`/${this.props.menuName}`}>
                    <img
                        class="home-icon"
                        src="/images/icon.png"
                        alt={this.props.menuName}
                        height="120px"
                        width="120px"/></Link>
            </div>
        );
    }
}
