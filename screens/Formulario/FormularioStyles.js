import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f6f8'
    },
    informacoes: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        marginBottom: 20,
        elevation: 2,
    },
    infoText: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
        color: '#333'
    },
    textArea: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 15,
        fontSize: 16,
        minHeight: 150,
        marginBottom: 20
    },
    buttonFinalizar: {
        backgroundColor: '#2e7d32',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});