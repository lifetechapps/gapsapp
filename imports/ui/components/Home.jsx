import React from 'react'
import {Link} from 'react-router'
import {Fab, Icon} from 'react-onsenui'
import ons from 'onsenui'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Fab
                    position="right bottom"
                    ripple
                    style={{
                    backgroundColor: ons
                        .platform
                        .isIOS()
                        ? '#4282cc'
                        : null
                }}/>

                <Fab
                    position="right top"
                    ripple
                    style={{
                    backgroundColor: ons
                        .platform
                        .isIOS()
                        ? '#4282cc'
                        : null
                }}/>
                <Fab
                    position="left bottom"
                    ripple
                    style={{
                    backgroundColor: ons
                        .platform
                        .isIOS()
                        ? '#4282cc'
                        : null
                }}/>

                <Fab
                    position="left top"
                    ripple
                    style={{
                    backgroundColor: ons
                        .platform
                        .isIOS()
                        ? '#4282cc'
                        : null
                }}/>
            </div>
        )
    }
}
