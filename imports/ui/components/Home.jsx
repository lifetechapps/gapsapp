import React from 'react'
import {Link} from 'react-router'
import {Icon, Row, Col} from 'react-onsenui'

export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col><br/><br/></Col>
                    <Col><br/><br/></Col>
                </Row>
                <Row>
                    <Col><br/><br/></Col>
                    <Col><br/><br/></Col>
                </Row>
                <Row verticalAlign='bottom'>
                    <Col align='middle' width='50%'>
                        <Link to="home"><ons-icon icon='ion-home, material:md-home' size='80px' fixed-width='true'/><br/>Home</Link>
                    </Col>
                    <Col align='middle' width='50%'>
                        <Link to="settings"><ons-icon icon='ion-search, material:md-search' size='80px' fixed-width='true'/><br/>Search</Link>
                    </Col>
                </Row>
                <Row>
                    <Col><br/><br/></Col>
                    <Col><br/><br/></Col>
                </Row>
                <Row>
                    <Col><br/><br/></Col>
                    <Col><br/><br/></Col>
                </Row>
                <Row verticalAlign='bottom'>
                    <Col align='middle' width='50%'>
                        <Link to="/settings"><ons-icon class='ons-icon my-sample-icon' fixed-width='true'/><br/>Plan</Link>
                    </Col>
                    <Col align='middle' width='50%'>
                        <Link to="/settings"><ons-icon icon='ion-search, material:md-search' size='80px' fixed-width='true'/><br/>Settings</Link>
                    </Col>
                </Row>
                <Row>
                    <Col><br/><br/></Col>
                    <Col><br/><br/></Col>
                </Row>
                <Row>
                    <Col><br/><br/></Col>
                    <Col><br/><br/></Col>
                </Row>
                <Row verticalAlign='bottom'>
                    <Col align='middle' width='50%'>
                        <Link to="/settings"><ons-icon icon='ion-search, material:md-search' size='80px' fixed-width='true'/><br/>Profiles</Link>
                    </Col>
                    <Col align='middle' width='50%'>
                        <Link to="/settings"><ons-icon icon='ion-gear-a, material:md-settings' size='80px' fixed-width='true'/><br/>Settings</Link>
                    </Col>
                </Row>
            </div>
        )
    }
}
