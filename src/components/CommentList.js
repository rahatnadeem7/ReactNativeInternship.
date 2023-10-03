import React from 'react';
import { View, FlatList, Text } from 'react-native';

const CommentList = ({ comments }) => {
  return (
    <FlatList
      data={comments}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10 }}>
          <Text>{item.name}</Text>
          <Text>{item.body}</Text>
        </View>
      )}
    />
  );
};

export default CommentList;
