import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import { emailChanged, passwordChanged, loginUser } from "../actions";
import { Card, CardSection, Input, Button, Spinner } from "./common";

class LoginForm extends Component {
  state = {
    singUpForm: false
  };
  onEmailChange(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    if (this.state.singUpForm) {
      return <Button onPress={this.onButtonPress.bind(this)}>Sing Up</Button>;
    } else {
      return <Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
    }
  }

  onRegisterForm() {
    this.setState({
      singUpForm: !this.state.singUpForm
    });
  }

  render() {
    const { singUpForm } = this.state;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>
        {this.renderError() && !singUpForm}
        <CardSection>{this.renderButton()}</CardSection>
        {!singUpForm && (
          <CardSection>
            <Button onPress={this.onRegisterForm.bind(this)}>Register</Button>
          </CardSection>
        )}
        {singUpForm && (
          <CardSection>
            <Button onPress={this.onRegisterForm.bind(this)}>
              Swich to Login
            </Button>
          </CardSection>
        )}
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return {
    email,
    password,
    error,
    loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
