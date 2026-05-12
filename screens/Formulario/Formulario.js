import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Formulario({ route, navigation }) {
    const { id, nome, status } = route.params;
    const [textoFormulario, setTextoFormulario] = useState('');

    const voltarDashboard = () => {
        if(textoFormulario !== null && textoFormulario.trim() !== '') {
            Alert.alert("Sucesso", "Relatório finalizado corertamente", [
                { text: "OK", onPress: () => navigation.navigate("Maquinas") }
            ]);
        } else {
            Alert.alert("Atenção", "Preencha o relatório antes de finalizar.");
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.informacoes}>
                <Text style={styles.infoText}>ID: {id}</Text>
                <Text style={styles.infoText}>Máquina: {nome}</Text>
                <Text style={styles.infoText}>Status: {status}</Text>
            </View>

            <TextInput
                style={styles.textArea}
                multiline={true} 
                numberOfLines={6} 
                onChangeText={setTextoFormulario}
                value={textoFormulario}
                placeholder="Digite a ação realizada aqui..."
                textAlignVertical="top" 
            />

            <TouchableOpacity style={styles.buttonFinalizar} onPress={voltarDashboard}>
                <Text style={styles.buttonText}>Finalizar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}