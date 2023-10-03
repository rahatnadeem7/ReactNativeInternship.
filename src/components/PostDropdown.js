import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

const PostDropdown = ({ posts, selectedPost, onPostChange }) => {
  const dropdownItems = posts.map((post) => ({
    label: post.title,
    value: post.id.toString(),
  }));

  return (
    <RNPickerSelect
      onValueChange={onPostChange}
      items={dropdownItems}
      value={selectedPost}
    />
  );
};

export default PostDropdown;
