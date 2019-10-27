import React from 'react';
import { withNavigation } from 'react-navigation';

class AuthLoading extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
  }
  render() {
    return null;
  }
}

export default withNavigation(AuthLoading);
