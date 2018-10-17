import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Left, Right, Body, Title} from 'native-base';

const firstInputLabel = 'Username';
const secondInputLabel = 'Password';
const successButtonLabel = 'Login';
const transparentButtonLabel = 'Forgot username or password';
const loginPageTitle = 'KidaStar';

class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username : '',
            password : '',
            isLoading : false,
            error : false
        }
    }
    handleFirstInputChange(event) {
        this.setState({
            username: event.nativeEvent.text
        })
    }

    handleSecondInputChange(event) {
        this.setState({
            password: event.nativeEvent.text
        })
    }

    handleSuccessButtonPress() {
        this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
        });
    }

    handleHelpButtonPress() {
        this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
        });
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left/>
                    <Body>
                        <Title>{loginPageTitle}</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>{firstInputLabel}</Label>
                            <Input onChange={this.handleFirstInputChange.bind(this)}/>
                        </Item>

                        <Item floatingLabel last>
                            <Label>{secondInputLabel}</Label>
                            <Input onChange={this.handleSecondInputChange.bind(this)}/>
                        </Item>

                        <Button success
                                style={styles.middleLongButtonWithMargin}
                                onPress={this.handleSuccessButtonPress.bind(this)}>
                            <Text>{successButtonLabel}</Text>
                        </Button>

                        <Button transparent
                                style={styles.middleLongButton}
                                onPress={this.handleHelpButtonPress.bind(this)}>
                            <Text>{transparentButtonLabel}</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    middleLongButton: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        justifyContent: 'center'
    },
    middleLongButtonWithMargin : {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 10
    }
});

module.exports = HomeScreen;