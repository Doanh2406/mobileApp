import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'

const loading = () => {
    return (
        <View>
            <ActivityIndicator size="large"/>
        </View>
    )
}

export default loading

const styles = StyleSheet.create({})
