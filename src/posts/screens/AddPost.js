import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';

class AddPost extends Component {
    static propTypes = {
        componentId: PropTypes.string
    } 

    constructor(props){
        super(props);

        Navigation.events().bindComponent(this);
    }

    static get options() {
        return{
            topBar: {
                title: {
                    text: 'Add Post'
                },
                rightButtons: [
                  {
                    id: 'saveButton',
                    text: 'Save',
                    enabled: false
                  }
                ],
                leftButtons: [
                    {
                        id: 'cancelButton',
                        text: 'Cancel',
                        icon: require('../../icons/close.png')
                    }
                ]
              }
        };
    }

    navigationButtonPressed({buttonId}){
        if(buttonId === 'saveButton'){
            Navigation.dismissModal(this.props.componentId);
        } else if (buttonId === 'cancelButton'){
            Navigation.dismissModal(this.props.componentId);
        }
    }

    onChangeText = text => {
        Navigation.mergeOptions(this.props.componentId, {
            topBar: {
                rightButtons:[
                    {
                        id: 'saveButton',
                        text: 'Save',
                        enabled: !!text
                    }
                ]
            }
        });
    } 

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Add Post Screen</Text>
                <TextInput 
                    placeholder='Start writing to change save button status'
                    onChangeText={this.onChangeText}>
                </TextInput>
            </View>
        );
    }
}

// AddPost.options ={
//     topBar: {
//         title: {
//             text: "Add Post"
//         },
//         rightButtons: [
//             {
//                 id: 'saveButton',
//                 text: 'Save'
//             }
//         ],
//         leftButtons: [
//             {
//                 id: 'cancelButton',
//                 icon: require('../../icons/ic_close.png')
//             }
//         ]
//     }
// };

export default AddPost;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D4FF45'
    },
    text: {
        fontSize: 28,
        textAlign: 'center',
        margin: 16
    }
});