import { useState } from "react";
import {Text, TextInput, View, TouchableOpacity} from "react-native"

export default function Login({navigation}) {
    const email = useState('');
    const senha = useState('');

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
        />

        <TextInput
            style={styles.input}
            value={senha}
            secureTextEntry={true}
            editable={false}
        />

        <TouchableOpacity style={styles.botaoLogin} onPress={validarLogin}>
            <Text style={styles.textoLogin}>Login</Text>
        </TouchableOpacity>
        </View>
    );
}