import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import PropTypes from 'prop-types';
import { Navigation } from 'react-native-navigation';

class ViewPost extends Component {

    static propTypes = {
        componentId : PropTypes.string,
        somePropsToPass: PropTypes.string
    };

    constructor(props){
        super(props);

        this.onPostDeletePressed = this.onPostDeletePressed.bind(this);
    }

    onPostDeletePressed() {
        Navigation.pop(this.props.componentId);
        setTimeout(() => {alert('Post Deleted')}, 1000);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>View Post Details</Text>
                <Text style={styles.captionText}>{this.props.somePropsToPass}</Text>
                <Button color={'red'} title='Delete Post' onPress={this.onPostDeletePressed}></Button>
            </View>
        );
    }
}

export default ViewPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FCDDDB',
        justifyContent: "center",
        alignContent: "center"
    },
    headerText: {
        fontSize: 28,
        textAlign: 'center',
        margin: 12
    },
    captionText: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 16
    }
});