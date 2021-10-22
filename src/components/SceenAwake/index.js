import React, { Component } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import IdleTimerManager from 'react-native-idle-timer';


class SceenAwake extends Component {
		
	activate() {
		console.log('hello')
		IdleTimerManager.setIdleTimerDisabled(true)
	}

render() {
console.log("helloooooo jimmy")
	return(
		<View style={styles.wrapper}>
			<Button title={'hello'} onPress={this.activate}></Button>
			
		</View>
	)
}
}
const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default SceenAwake
