import {View, Text, StyleSheet} from "react-native";
import {ItemProps} from "@/components/Documents/List/components/types";
import Feather from "@expo/vector-icons/Feather";

export const ItemListView = (props: ItemProps) => {
	const { document} = props
	return (
		<View style={styles.cardContainer}>

			<View style={styles.headerContainer}>
				<View style={styles.titleContainer}>
					<Text style={styles.titleText}>{document.title}</Text>
				</View>
				<View style={styles.col}>
				<Text style={styles.versionText}>{document.formattedVersion}</Text>
				</View>
			</View>

			<View style={styles.headerContainer}>
				<Text style={styles.dateText}>{document.formattedCreatedAt}</Text>
			</View>

			<View style={styles.row}>

				<View style={styles.detailsColumnContainer}>
					<View  style={styles.detailsColumnHeader}>
						<Feather name="users" size={12} color="black" />
						<Text style={styles.detailsColumnHeaderText}>{'Contributors'}</Text>
					</View>
					{document.contributors.map(contributor=>(
						<Text style={styles.detailsColumnText} key={contributor.id}>{contributor.name}</Text>
					))}
				</View>

				<View style={styles.detailsColumnContainer}>
					<View  style={styles.detailsColumnHeader}>
						<Feather name="link" size={12} color="black" />
						<Text style={styles.detailsColumnHeaderText}>{'Attachments'}</Text>
					</View>
					{document.attachments.map((attachment, index)=>(
						<Text style={styles.detailsColumnText} key={index}>{attachment}</Text>
					))}
				</View>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	cardContainer:{
		backgroundColor: 'white',
		borderRadius: 8,
		padding:10,
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
 headerContainer:{
	 flexDirection: "row", paddingBottom: 5
 } ,
	titleContainer:{
		flexDirection: "column", flex:1
	}   ,
	  titleText:{
		  fontSize: 14,
		  fontWeight: "bold",
	  } ,
	versionText:{
		paddingLeft:10, color:'gray',  	fontSize: 12
	},
	dateText:{
		fontSize: 10,
		color: "gray",
	},
	detailsColumnContainer:{
		flexDirection: "column", maxWidth:'50%', flex:1
	},
	detailsColumnHeader:{
		flexDirection: "row", alignItems:'center', paddingBottom: 5
	} ,
	detailsColumnHeaderText:{
		fontSize: 12,fontWeight: "bold", paddingLeft:4
	},
	detailsColumnText:{
		fontSize: 12,color:'gray'
	}
})
