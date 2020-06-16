/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {Navigation} from 'react-native-navigation';
import {postsStore} from '../posts.store';
import * as postActions from '../posts.actions';
import { connect } from 'remx';

class PostsList extends Component {
  static propTypes = {
    componentId: PropTypes.string
  };

  constructor(props){
    super(props);

    Navigation.events().bindComponent(this);

    this.pushViewPostScreen = this.pushViewPostScreen.bind(this);
  }

  componentDidMount(){
    postActions.fetchPosts();
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [
          {
            id: 'addPost',
            text: 'Add'
          }
        ]
      }
    };
  }

  navigationButtonPressed({buttonId}){
    if(buttonId === 'addPost'){
      this.showAddPostModel();
    }
  }

  pushViewPostScreen = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'blog.ViewPost',
        passProps: {
          somePropsToPass: 'Some props we are passing'
        }
      },
      options: {
        tabBar: {
          title:{
            text: 'Post1'
           }
        }
      }
    });
  }

  showAddPostModel(){
    Navigation.showModal({
      stack: {
        children: [
          {
            component: {
              name: 'blog.AddPost'
            }
          }
        ]
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={this.pushViewPostScreen}>PostsList Screen</Text>
    <Text>{JSON.stringify(this.props.posts)}</Text>
      </View>
    );
  }
}

function mapStateToProps(){
  return {
    posts: postsStore.getPosts()
  };
}

// PostsList.options = {
//   topBar: {
//     rightButtons:[
//       {
//         id: 'addPost',
//         text: 'Add'
//       }
//     ]
//   }
// }

export default connect(mapStateToProps)(PostsList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3EDFF',
  },
  text: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
});
