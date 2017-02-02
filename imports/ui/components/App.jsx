import React from 'react';

import {
    Page,
    Splitter,
    SplitterSide,
    SplitterContent,
    Toolbar,
    ToolbarButton,
    BackButton,
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
                    <BackButton>Back</BackButton>
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
                                "Plans",
                                "Category",
                                "Profile",
                                "Settings"
                            ]}
                                renderHeader={() => <ListHeader>Menu</ListHeader>}
                                renderRow={(i) => <ListItem modifier='longdivider' tappable>{i}</ListItem>}/>
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
