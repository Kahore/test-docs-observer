import {TouchableOpacity, View, Text, StyleSheet} from "react-native";
import Feather from "@expo/vector-icons/Feather";

export const AddDocument = () => {
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button}>
				<View style={styles.buttonContent}>
					<Feather name="plus" size={14} color="white" />
					<Text style={styles.buttonText}>Add document</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}
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
