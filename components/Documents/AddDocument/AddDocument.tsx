import {
	TouchableOpacity,
	View,
	Text,
	StyleSheet,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React, {memo, useState} from "react";
import {BottomSheet} from "@/components/shared/BottomSheet";
import {Form} from "./Form";

export const AddDocument = memo(() => {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<View style={styles.container}>
				<TouchableOpacity style={styles.button}   onPress={() =>setModalVisible(true)}>
					<View style={styles.buttonContent}>
						<Feather name="plus" size={14} color="white" />
						<Text style={styles.buttonText}>Add document</Text>
					</View>
				</TouchableOpacity>
			</View>
			<BottomSheet
				headerText={'Add document'}
				visible={modalVisible}
				onDismiss={()=>setModalVisible(false)}>
				<Form onDismiss={()=>setModalVisible(false)}/>
			</BottomSheet>
		</>
	)
})

const styles = StyleSheet.create({
	container:{
		borderTopWidth: 1,
		borderTopColor: 'gray',
		marginTop:5,
		paddingHorizontal: 16
	},
	button:{
		padding:8,  marginTop:10, backgroundColor:'#2196f3', borderRadius:5,
	},
	buttonContent:{
		flexDirection:'row',alignItems: 'center', justifyContent:'center'
	},
	buttonText:{
		color:'white', paddingLeft:4
	}
})
