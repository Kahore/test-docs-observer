import {View, StyleSheet} from "react-native";
import {Documents} from "@/components/Documents";
import {ListView} from "@/components/Documents/types";
import {useCallback, useEffect, useState} from "react";
import {useDocumentsViewModel} from "@/components/Documents/Documents.vm";
import {ScreenWrapper} from "@/components/shared/ScreenWrapper";
import {useNavigation} from "expo-router";
import {Notification} from "@/components/Documents/Notification";
import {observer} from "mobx-react";

function DocumentsScreen() {
	const [listView, setListView] = useState<ListView>(ListView.list);
	const vm = useDocumentsViewModel();
	const navigation = useNavigation();

	const setHeaderOptions =useCallback(() => {
		navigation.setOptions({
			headerRight: () => <Notification count={vm.notificationsCount}/>
		});
	},[])

	useEffect(()=>{
		vm.load();
		setHeaderOptions()
			return () => {
				//Normally disconnection goes via AppStateChangeListener
				return vm.dispose();
			};
	} ,[vm]);
	useEffect(()=>{
		setHeaderOptions()
	} ,[vm.notificationsCount]);

	return (
		<ScreenWrapper>
			<View style={styles.flex}>
				<Documents.Filters activeView={listView} onToggleView={setListView}/>
				<Documents.List documents={vm.documents} listView={listView}/>
				<Documents.AddDocument />
			</View>
		</ScreenWrapper>
	)
}

const styles = StyleSheet.create({
	flex:{
		flex:1
	}
})
export default observer(DocumentsScreen);
