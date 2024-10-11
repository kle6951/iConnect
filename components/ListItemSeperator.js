import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../app/config/colors';

function ListItemSeperator() {
    return (
        <View style={styles.seperator}></View>
    );
}
const styles = StyleSheet.create({
    seperator:{
        height: 1,
        width: '100%',
        backgroundColor: colors.lightGrey,
    }
})

export default ListItemSeperator;