import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Dashboard({ route, navigation }) {
    const [manutencaoAtiva, setManutencaoAtiva] = useState(false);
    const { id, nome, status } = route.params;

    useEffect(() => {
        navigation.setOptions({ nome });
    }, []);

    const navegaParaFormulario = () => {
    if (manutencaoAtiva) {
        navigation.navigate('Formulario', { id, nome, status });
    } else {
        Alert.alert('Atenção', 'Selecione manutenção para continuar.');
    }
};
    return (
        <SafeAreaView>
            <Text style={styles.titleDetails}>Detalhes: {nome}</Text>

            <View style={styles.Card}>
                <Text style={styles.detalhesMaquina}>ID: {id}</Text>
                <Text style={styles.detalhesMaquina}>Nome: {nome}</Text>
                <Text style={styles.detalhesMaquina}>Status: {status}</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 12, gap: 10 }}>
                    <Text style={styles.detalhesMaquina}>Manutenção?</Text>
                    <Switch
                        value={manutencaoAtiva}
                        onValueChange={setManutencaoAtiva}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.buttonRegistrar} onPress={navegaParaFormulario}>
                <Text style={styles.textButton}>Registrar Manutenção</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}