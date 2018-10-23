import React, { Component } from 'react';
import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';




export default class Formulas extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Header</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}