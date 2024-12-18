import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    card: {
        padding: 20,
        margin: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    experience: {
        fontSize: 16,
        color: '#555',
        marginVertical: 5,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default styles;