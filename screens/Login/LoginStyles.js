import { StyleSheet } from "react-native";

export default StyleSheet.create({
    containerLogin: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f4f6f8'
    },
    titleLogin: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: '#005b96'
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        fontSize: 16
    },
    botaoLogin: {
        backgroundColor: '#005b96',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10
    },
    textoLogin: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
