import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';




export default class Formulas extends Component {
    render() {
        return (
            <Container>
                <Header style={{backgroundColor:"#312e3f"}} >
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Formula</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            {/* <Icon name='menu' /> */}
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}