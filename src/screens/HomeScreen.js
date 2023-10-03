import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import CommentList from '../components/CommentList';
import PostDropdown from '../components/PostDropdown';

const HomeScreen = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState('');
  const [comments, setComments] = useState([]);

  useEffect(() => {
    // Fetch posts from a public API (e.g., JSONPlaceholder)
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setPosts(response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedPost) {
      // Fetch comments for the selected post
      axios
        .get(`https://jsonplaceholder.typicode.com/comments?postId=${selectedPost}`)
        .then((response) => {
          setComments(response.data);
        });
    }
  }, [selectedPost]);

  return (
    <ScrollView>
      <View style={{ padding: 20 }}>
        <PostDropdown
          posts={posts}
          selectedPost={selectedPost}
          onPostChange={(value) => setSelectedPost(value)}
        />
        <CommentList comments={comments} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
