import {View} from "react-native";
import ToggleButtons from "@/components/shared/ToggleButton/ToggleButton";
import Feather from '@expo/vector-icons/Feather';
import {ListView} from "@/components/Documents/types";

interface ViewVariantProps {
	active: ListView;
	onToggle: (item:ListView) => void;
}

export const ViewVariant = (props:ViewVariantProps)=> {
	const {active, onToggle} = props
	return (
		<View>
			<ToggleButtons
				firstIcon={<Feather name="list" size={14} color={active === ListView.list ? "#2196f3":"black"} />}
				secondIcon={<Feather name="grid" size={14} color={active === ListView.grid ? "#2196f3":"black"} />}
				active={active === ListView.list ? 1 :2}
				onToggle={(index:number)=>onToggle(index===1 ? ListView.list: ListView.grid)}
			/>
		</View>
	)
}
