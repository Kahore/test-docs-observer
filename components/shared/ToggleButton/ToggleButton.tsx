import React, {ReactNode} from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

const ToggleButtons = ({ firstIcon, secondIcon, active, onToggle }:{firstIcon:ReactNode,secondIcon:ReactNode,active:number,onToggle(active:number):void}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[styles.button, styles.buttonLeft, active === 1 && styles.active]}
				onPress={() => onToggle(1)}
			>
				<View>{firstIcon}</View>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.button, styles.buttonRight, active === 2 && styles.active]}
				onPress={() => onToggle(2)}
			>
				<View>{secondIcon}</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",

	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 10,
		paddingVertical: 5  ,
		borderTopWidth:1,
		borderBottomWidth:1,
		borderColor: '#cecdcd',
	},
	buttonLeft: {
		borderLeftWidth:1,
		borderTopLeftRadius:6,
		borderBottomLeftRadius:6,
				borderColor: '#cecdcd',
	},
	buttonRight: {
		borderRightWidth:1,
		borderTopRightRadius:6,
		borderBottomRightRadius:6,
				borderColor: '#cecdcd',
	},
	active: {
		backgroundColor: "white",
 },
});

export default ToggleButtons;
