import React from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#CDCDC1',
        alignItems: 'flex-end',
        borderColor: 'black',
        borderRadius: 20
    },
    displayValue: {
        fontSize: 50,
        color: 'black',
    }
})

export default props => 
    <View style={styles.display}>
        <Text style={styles.displayValue}
            numberOfLines={1}>{props.value}</Text>
    </View>