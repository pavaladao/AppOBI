import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function TutorialScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tutorial de Interação</Text>
            <Text style={styles.instructions}>
                Bem-vindo ao jogo! Aqui estão algumas instruções sobre como interagir com o app:
            </Text>
            <Text style={styles.instructions}>
                1. Você verá um conjunto de cores que podem ser arrastadas.
            </Text>
            <Text style={styles.instructions}>
                2. Pressione e segure uma cor para arrastá-la.
            </Text>
            <Text style={styles.instructions}>
                3. Organize as cores de acordo com a regra estabelecida.
            </Text>
            <Text style={styles.instructions}>
                4. Clique no botão "Verificar" para checar sua resposta.
            </Text>
            <Text style={styles.instructions}>
                5. Se você errar, terá algumas tentativas para corrigir.
            </Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Game')} // Navega para a tela do jogo
            >
                <Text style={styles.buttonText}>Próxima Etapa {'>>'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    instructions: {
        fontSize: 16,
        marginBottom: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    },
});
