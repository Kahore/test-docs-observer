import {FlatList, StyleSheet, View} from "react-native";
import {ListView} from "@/components/Documents/types";
import {VDocument} from "@/Domain/Document/ViewAdapters";
import {observer} from "mobx-react";
import {ItemListView, ItemGridView}  from "./components";

interface ListProps {
	listView: ListView
	documents:VDocument[]
}

export const List = observer((props:ListProps) => {
	const {listView, documents} = props

	const renderItem = ({item}:{item:VDocument}) => {
		  return listView === ListView.list ? <ItemListView document={item}/>  : <ItemGridView  document={item}/>
	}

	return (
		<View style={styles.flex}>
			<FlatList
				data={documents}
				key={listView}
				keyExtractor={keyExtractor}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ gap: 15, paddingHorizontal:16,paddingBottom:8 }}
				columnWrapperStyle={listView=== ListView.list ? undefined: { gap: 15 }}
				numColumns={listView=== ListView.list ? 1 : 2}
			/>
		</View>
	)
})
const styles = StyleSheet.create({
	flex:{
		flex:1
	}
})
const keyExtractor = (item:VDocument) =>item.id
