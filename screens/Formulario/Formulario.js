import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Formulario({ route, navigation }) {
    const { id, nome, status } = route.params;
    const [textoFormulario, setTextoFormulario] = useState('');

    const voltarDashboard = () => {
        if(textoFormulario != null) {
            navigation.navigate("Dashboard");
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.informacoes}>
                <Text>{id}</Text>
                <Text>{nome}</Text>
                <Text>{status}</Text>
            </View>

            <TextInput
                style={styles.textArea}
                multiline={true} 
                numberOfLines={4} 
                onChangeText={text => setTextoFormulario(text)}
                value={value}
                placeholder="Digite seu texto aqui..."
                textAlignVertical="top" 
            />

            <TouchableOpacity onPress={voltarDashboard}>
                <Text>Finalizar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}