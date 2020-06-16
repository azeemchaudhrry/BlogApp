import {postsStore} from './posts.store';

// const posts = [
//     {
//       id: 1,
//       title: 'Post 1',
//       text: 'Post 1 text',
//       img: 'http://picsum.photos/200/200/?image=977'
//     },
//     {
//       id: 2,
//       title: 'Post 2',
//       text: 'Post 2 text',
//       img: 'http://picsum.photos/200/200/?image=1'
//     }
//   ];

export async function fetchPosts(){
    const response = await fetch('http://localhost:3000/posts')
    const posts = await response.json();
    postsStore.setPosts(posts);

    //Mock data
    //postsStore.setPosts(posts);
}