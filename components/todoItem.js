import React from 'react';
import {StyleSheet, TouchableOpacity, Text , View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TodoItem = ({item, pressHandler}) => {
  return (
    
      <View style={styles.item}>
        <Text style={styles.text}>{item.text}</Text>
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Icon
          size={20}
          iconStyle={{backgroundColor: 'red', fontSize: 22}}
          name="delete"
        />
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection:"row",
    justifyContent:"space-between",
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    // borderStyle: 'dashed',
    borderRadius: 10,
    // backgroundColor: 'yellow',
  },
  text:{
    color:"black"

  }
});

export default TodoItem;
