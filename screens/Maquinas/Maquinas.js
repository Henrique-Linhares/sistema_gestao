import React from 'react';
import { View, Text, SectionList, TouchableOpacity, SafeAreaView } from 'react-native';
import { maquinas } from '../../api/data';
import styles from './MaquinasStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Maquinas({ navigation }) {
    function handleSelecionar(maquina) {
        navigation.navigate('Detalhe', {
            id: maquina.id,
            nome: maquina.nome,
            status: maquina.status,
        });
    }

    function renderItem({ item }) {
        const operando = item.status === 'Operando';
        return (
            <TouchableOpacity style={styles.item} onPress={() => handleSelecionar(item)}>
                <View>
                    <Text style={styles.itemNome}>{item.nome}</Text>
                    <Text style={styles.itemId}>ID: {item.id}</Text>
                </View>
                <View style={[styles.badge, operando ? styles.badgeOperando : styles.badgeParado]}>
                    <Text style={operando ? styles.badgeTextoOk : styles.badgeTextoErr}>
                        {item.status}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    function renderSectionHeader({ section }) {
        return (
            <View style={styles.secaoHeader}>
                <Text style={styles.secaoTitulo}>{section.title}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Máquinas da Planta</Text>
            <SectionList
                sections={maquinas}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
            />
        </SafeAreaView>
    );
}
