import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#f0f0f0' 
    },
    titulo: { 
        fontSize: 20, 
        fontWeight: 'bold', 
        padding: 16, 
        backgroundColor: '#fff', 
        borderBottomWidth: 1, 
        borderColor: '#ddd' 
    },

    secaoHeader: { 
        backgroundColor: '#e0e0e0', 
        paddingHorizontal: 16, 
        paddingVertical: 8 
    },
    secaoTitulo: { 
        fontSize: 13, 
        fontWeight: '700', 
        color: '#555', 
        textTransform: 'uppercase', 
        letterSpacing: 1 
    },

    item: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        backgroundColor: '#fff', 
        padding: 16, 
        borderBottomWidth: 1, 
        borderColor: '#f0f0f0' 
    },
    itemNome: { 
        fontSize: 15, 
        fontWeight: '600', 
        color: '#111' 
    },
    itemId: { 
        fontSize: 12, 
        color: '#999', 
        marginTop: 2 
    },
    badge: { 
        paddingHorizontal: 10, 
        paddingVertical: 4, 
        borderRadius: 12 
    },
    badgeOperando: { 
        backgroundColor: '#e6f4ea' 
    },
    badgeParado: { 
        backgroundColor: '#fdecea' 
    },
    badgeTextoOk: { 
        color: '#2e7d32', 
        fontSize: 12, 
        fontWeight: '600' 
    },
    badgeTextoErr: { 
        color: '#c62828', 
        fontSize: 12, 
        fontWeight: '600' 
    },
});