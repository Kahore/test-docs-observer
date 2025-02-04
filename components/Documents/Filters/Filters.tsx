import {View,StyleSheet} from "react-native";
import {SortBy, ViewVariant} from "./components";
import {ListView} from "@/components/Documents/types";

interface FiltersProps {
	activeView: ListView;
	onToggleView: (item:ListView) => void;
}

export const Filters = (props:FiltersProps) => {
	const { activeView, onToggleView } = props
	return (
		<View style={styles.container}>
			<SortBy/>
			<ViewVariant active={activeView} onToggle={onToggleView}/>
		</View>
	)
}
const styles = StyleSheet.create({
	container:{
		paddingBottom:10,
		paddingHorizontal:16,
		flexDirection: "row",
		justifyContent: "space-between",
	}
})
