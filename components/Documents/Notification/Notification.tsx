import Feather from "@expo/vector-icons/Feather";
import {StyleSheet, Text, View} from "react-native";
import {observer} from "mobx-react";

interface NotificationProps {
	count:string | number
}

export const Notification = observer ((props:NotificationProps)=>{
	return (
		<View style={styles.container}>
			<Feather name="bell" size={14} color="black" />
			<View style={styles.badgeContainer}>
				<Text style={styles.badgeText}>{props.count}</Text>
			</View>
		</View>
	)
});

const styles = StyleSheet.create({
	container:{
		borderWidth:1,borderColor:'#cecdcd', padding:8, borderRadius:6, position:'relative'
	},
	badgeContainer:{
		position:'absolute',
		top:0,
		right:0,
		backgroundColor:'#2196f3',
		borderRadius:8,
		width:15,
		height:15,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'center'
	},
	badgeText:{
		fontSize:8,
		color:'white',
		alignItems:'center',
		justifyContent:'center'
	}
})
