import {View, Text, StyleSheet} from "react-native";
import {ItemProps} from "@/components/Documents/List/components/types";

export const ItemGridView = (props: ItemProps) => {
	const {document} = props
	return (
		<View style={styles.cardContainer}>
			<View style={styles.col}>
				<Text style={styles.header}>{document.title}</Text>
			</View>
			<View style={styles.row}>
				<Text>{document.formattedVersion}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer:{
		flexDirection: 'column',
		padding: 10,
		maxWidth: '50%',
		flex:1,
		backgroundColor: '#fff',
		borderRadius: 8,
		shadowColor: "#000000",
		shadowOffset: {
			width: -2,
			height: 3,
		},
		shadowOpacity:  0.18,
		shadowRadius: 4.59,
		elevation: 5
	},
	col:{
		flexDirection: 'column',
	} ,
	row:{
		flexDirection: 'row',
	},
	header:{
		fontSize: 14,
		fontWeight: "bold",
	}
})
