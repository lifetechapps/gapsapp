import React from 'react'
import {Link, browserHistory} from 'react-router'

import {
    Page,
    Splitter,
    SplitterSide,
    SplitterContent,
    Toolbar,
    ToolbarButton,
    Icon,
    List,
    ListItem,
    ListHeader
} from 'react-onsenui';

class SideMenu extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    hide() {
        this.setState({isOpen: false});
    }

    show() {
        this.setState({isOpen: true});
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='left'>
                    <ToolbarButton onClick={browserHistory.goBack}>Back</ToolbarButton>
                </div>
                <div className='center'>
                    LifeTech Apps
                </div>
                <div className='right'>
                    <ToolbarButton
                        onClick={this
                        .show
                        .bind(this)}>
                        <Icon icon='ion-navicon, material:md-menu'/>
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page>
                <Splitter>
                    <SplitterSide
                        side='right'
                        isOpen={this.state.isOpen}
                        onClose={this
                        .hide
                        .bind(this)}
                        onOpen={this
                        .show
                        .bind(this)}
                        collapse={true}
                        width={240}
                        isSwipeable={true}>
                        <Page>
                            <List
                                dataSource={[
                                "Home",
                                "Search",
                                "Plan",
                                "Foods",
                                "Profiles",
                                "Settings"
                            ]}
                                renderHeader={() => <ListHeader>Menu</ListHeader>}
                                renderRow={(i) => <Link to={i.toLowerCase()}><ListItem key={i} modifier='longdivider' tappable>{i}</ListItem></Link>}/>
                        </Page>
                    </SplitterSide>

                    <SplitterContent>
                        <Page
                            renderToolbar={this
                            .renderToolbar
                            .bind(this)}>
                            <div className="content">
                                {this.props.children}
                            </div>
                        </Page>
                    </SplitterContent>
                </Splitter>
            </Page>
        );
    }
}

module.exports = SideMenu;
