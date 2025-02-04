import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React from "react";

interface FormProps {
	onDismiss:() => void
}
export const Form = (props:FormProps)=> {

	// const vm = useDocument() <- manage form/ frontend validation. Inside injection DocumentCommand.service
	// DocumentCommand.service covers business logic validation (if needed), injection Document.repository and send request to it.
	// props.onDismiss after submit
	return (
		<>
			<View style={styles.card}>

				<Text style={styles.cardSubHeader}>{'Document informations'}</Text>

				<Text style={styles.label}>{'Name'}</Text>
				<View style={styles.rowFull}>
					<TextInput
						placeholder='Placeholder'
						style={styles.input}
					/>
				</View>

				<Text style={styles.label}>{'Version'}</Text>
				<View style={styles.rowFull}>
					<TextInput
						placeholder='Placeholder'
						style={styles.input}
					/>
				</View>
				
				<Text style={styles.label}>{'File'}</Text>
				<View style={styles.row}>
					<TouchableOpacity style={styles.fileContainer}>
						<View style={styles.rowCenter}>
							<Feather name="file-text" size={12} color="#2196f3" />
							<Text style={styles.fileText}>{'Choose file'}</Text>
						</View>
					</TouchableOpacity>
				</View>

			</View>

			<View style={styles.submitContainer}>
				<TouchableOpacity style={styles.submit}>
					<Text style={styles.submitText}>{'Submit'}</Text>
				</TouchableOpacity>
			</View>
		</>
	)
}

const styles = StyleSheet.create({
	card:{
		paddingHorizontal: 16, flex:1, marginBottom:10
	},
	cardSubHeader:{
  fontWeight: 'bold', marginBottom:8
	},
	row:{
		flexDirection:'row'
	},
	rowCenter:{
		flexDirection:'row', alignItems:'center'
	},
	rowFull:{
		flex:1,
		flexDirection:'row'
	},
	label:{
		marginBottom:5,
	},
	input: {
		flex:1,
		height:40,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#bcbcbc',
		paddingHorizontal: 15,
		marginBottom: 10
	},
	fileContainer: {
		borderColor: '#cecdcd',
		borderRadius:6,
		borderWidth:1,
		padding:8
	},
	fileText:{
		color:'#2196f3'
	},
	submitContainer:{
		flexDirection:'row',
		borderTopWidth:1,
		borderTopColor: 'gray',
		paddingVertical:10,
		paddingHorizontal:16,
		backgroundColor:'#eeeeee'
	},
	submit:{
		backgroundColor: '#2196f3',
		borderRadius:6,
		padding:10,
		flex:1,
		justifyContent:'center',
		alignItems:'center'
	},
	submitText:{
		color:'white',
		fontSize:16,
		fontWeight:'bold'
	}
})
