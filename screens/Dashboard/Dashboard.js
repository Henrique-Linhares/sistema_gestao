import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Alert, Switch } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './DashboardStyles';

export default function Dashboard({ route, navigation }) {
    const [manutencaoAtiva, setManutencaoAtiva] = useState(false);
    const { id, nome, status } = route.params;

    const isOperando = status?.trim().toLowerCase() === 'operando';

    useEffect(() => {
        navigation.setOptions({ title: nome });
    }, [navigation, nome]);

    const navegaParaFormulario = () => {
        if (isOperando) {
            Alert.alert('Restrição', 'Apenas máquinas paradas podem receber manutenção.');
            return;
        }

        if (manutencaoAtiva) {
            navigation.navigate('Formulario', { id, nome, status });
        } else {
            Alert.alert('Atenção', 'Selecione manutenção para continuar.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titleDetails}>Detalhes: {nome}</Text>

            <View style={styles.Card}>
                <Text style={styles.detalhesMaquina}>ID: {id}</Text>
                <Text style={styles.detalhesMaquina}>Nome: {nome}</Text>
                <Text style={styles.detalhesMaquina}>Status: {status}</Text>

                <View style={styles.switchContainer}>
                    <Text style={styles.detalhesMaquina}>Manutenção?</Text>
                    <Switch
                        value={manutencaoAtiva}
                        onValueChange={setManutencaoAtiva}
                    />
                </View>
            </View>

            <TouchableOpacity 
                style={[styles.buttonRegistrar, isOperando && styles.buttonDisabled]} 
                onPress={navegaParaFormulario}
            >
                <Text style={styles.textButton}>Registrar Manutenção</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}