import Feather from '@expo/vector-icons/Feather';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SortBy = () => {
	const handlePress = () => {
		 // here call out for sort drop down
	};
	return (
		<TouchableOpacity style={styles.button} onPress={handlePress}>
			<View style={styles.frontIcon}>
				<Feather name="code" size={10} color="black" />
			</View>
			<Text style={styles.text}>Sort by</Text>
			<View style={styles.divider} />
			<Feather name="chevron-down" size={12} color="black" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',

		paddingHorizontal: 6,
		borderRadius: 6,
		borderWidth: 1,
		borderColor: '#cecdcd',
	},
	frontIcon:{
		transform:'rotate(90deg)'
	},
	text: {
		marginRight: 4,
		marginLeft: 8,
		fontSize: 12,
		color: '#333',
	},
	divider: {
		width: 1,
		height: 24,
		backgroundColor: '#cecdcd',
		marginHorizontal: 4,
	},
});

