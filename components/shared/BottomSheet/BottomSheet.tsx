import {Modal, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import React, {PropsWithChildren} from "react";

interface BottomSheetProps {
	visible:boolean
	headerText: string
	onDismiss:() => void
}

export const BottomSheet = (props:BottomSheetProps&PropsWithChildren) => {
	const { visible, headerText, children, onDismiss} = props
	return (
		<Modal
			animationType="fade"
			statusBarTranslucent={true}
			transparent={true}
			visible={visible}
			onRequestClose={onDismiss}>
			<TouchableWithoutFeedback onPress={onDismiss} style={styles.flex}>
				<View style={styles.modalView}>

					<View style={styles.cardWrapper}>

						<View style={styles.headerRow}>
							<View>
								<Text style={styles.headerText}>{headerText}</Text>
							</View>

							<TouchableOpacity onPress={onDismiss}>
								<Feather name="x" size={24} color="gray" />
							</TouchableOpacity>
						</View>
						{children}
					</View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
	)
}
const styles = StyleSheet.create({
	flex:{
		flex:1
	},
	modalView: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'flex-end',
	},
	cardWrapper:{
		flex:1,
		backgroundColor:'white',
		maxHeight:350,
		paddingTop: 12,
		borderTopRightRadius: 12,
		borderTopLeftRadius: 12,
	},
	headerRow: {
		paddingHorizontal: 16,
		flexDirection: 'row',
		marginBottom: 8,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	headerText:{
fontSize:20,fontWeight: 'bold'
	}
})
