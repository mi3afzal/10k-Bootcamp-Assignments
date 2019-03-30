import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
// https://expo.github.io/vector-icons/

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: "center" }}>
					Hello World {"\n"}
					Developed By {"\n"}
					Muhammad Irfan Afzal {"\n"}
				</Text>
				<View
					style={{
						flexDirection: "row",
						height: 250,
						padding: 20,
						backgroundColor: "gray"
					}}
				>
					<View style={{ backgroundColor: "white", flex: 2 }} />
					<View
						style={{
							backgroundColor: "green",
							flex: 5,
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<Ionicons name="ios-moon" size={130} color="white" />
						<Ionicons
							name="ios-star"
							size={60}
							color="white"
							style={{ marginBottom: 50, marginLeft: -15 }}
						/>
					</View>
				</View>
				<Text>
					With <AntDesign name="heart" size={30} color="red" />
				</Text>
				<Text>From Pakistan</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
