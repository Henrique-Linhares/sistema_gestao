import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f6f8'
    },
    titleDetails: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333'
    },
    Card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        marginBottom: 30
    },
    detalhesMaquina: {
        fontSize: 18,
        marginBottom: 10,
        color: '#555'
    },
    switchContainer: {
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 12, 
        gap: 10
    },
    buttonRegistrar: {
        backgroundColor: '#005b96',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    buttonDisabled: {
        backgroundColor: '#a0a0a0'
    },
    textButton: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});