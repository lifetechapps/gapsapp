import React, {Component} from 'react'

export default class Test extends Component {
    constructor(props) {
        super(props)
    }

    render()
    {
        return (
            <div id="menu-icon">
                <a href="" title={this.props.menuName}><img class="home-icon" src="/images/icon.png" alt={this.props.menuName} height="120px" width="120px"/></a>
            </div>
        );
    }
}
