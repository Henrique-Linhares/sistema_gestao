import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from './LoginStyles';

export default function Login({navigation}) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('123'); // Manter o 123 para bater com a validação hardcoded

    const validarLogin = () => {
        if(email === "henrique@email.com" && senha === "123") {
            navigation.navigate("Maquinas")
        } else {
            alert("Dados Inválidos!, Tente Novamente!")
        }
    };

    return (
        <View style={styles.containerLogin}>
            <Text style={styles.titleLogin}>Login</Text>

            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="E-mail (henrique@email.com)"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                value={senha}
                secureTextEntry={true}
                editable={true}
            />

            <TouchableOpacity style={styles.botaoLogin} onPress={validarLogin}>
                <Text style={styles.textoLogin}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}