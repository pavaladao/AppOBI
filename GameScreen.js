// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import DraggableFlatList from 'react-native-draggable-flatlist';
// import Icon from 'react-native-vector-icons/FontAwesome';

// // Configuração inicial das cores e posições
// const initialColors = [
//     { id: 'R', label: 'R', color: 'red' },
//     { id: 'O', label: 'O', color: 'orange' },
//     { id: 'Y', label: 'Y', color: 'yellow' },
//     { id: 'G', label: 'G', color: 'green' },
// ];

// export default function GameScreen() {
//     const [data, setData] = useState(initialColors);
//     const [attempts, setAttempts] = useState(3); // 3 corações iniciais
//     const [message, setMessage] = useState('');

//     // Função que verifica a posição correta dos elementos
//     const checkAnswer = () => {
//         const correctOrder = ['Y', 'G', 'R', 'O']; // Ordem esperada
//         const userOrder = data.map(item => item.id);
//         const isCorrect = correctOrder.every((color, index) => color === userOrder[index]);

//         if (isCorrect) {
//             setMessage('Correto!');
//         } else {
//             if (attempts > 1) {
//                 setAttempts(attempts - 1);
//                 setMessage('Tente novamente!');
//             } else {
//                 setMessage('Você perdeu! Tente novamente.');
//             }
//         }
//     };

//     // Função para reiniciar a fase
//     const resetGame = () => {
//         setData(initialColors);
//         setAttempts(3);
//         setMessage('');
//     };

//     // Renderiza os corações com base nas tentativas
//     const renderHearts = () => {
//         return Array.from({ length: attempts }, (_, i) => (
//             <Icon key={i} name="heart" size={20} color="purple" style={styles.heart} />
//         ));
//     };

//     // Renderiza cada item da lista
//     const renderItem = ({ item, drag, isActive }) => (
//         <TouchableOpacity
//             style={[
//                 styles.box,
//                 {
//                     backgroundColor: isActive ? '#ccc' : item.color, // Cor cinza durante o arrasto
//                     opacity: isActive ? 0.5 : 1, // Altera a opacidade
//                 },
//             ]}
//             onLongPress={drag}
//             delayLongPress={1} // Tempo menor para iniciar o arrasto
//             disabled={isActive} // Desabilita interação enquanto arrastando
//         >
//             <Text style={styles.label}>{item.label}</Text>
//         </TouchableOpacity>
//     );

//     return (
//         <View style={styles.container}>
//             <Text style={styles.instructions}>
//                 Organize as cores (R, O, Y, G) de acordo com a regra:
//                 {'\n'}Elas NÃO podem estar na ordem R-O-Y-G original.
//             </Text>

//             <View style={styles.draggableContainer}>
//                 <DraggableFlatList
//                     data={data}
//                     onDragEnd={({ data }) => {
//                         setData(data); // Atualiza o estado imediatamente ao soltar
//                     }}
//                     keyExtractor={(item) => item.id}
//                     renderItem={renderItem}
//                     horizontal
//                 />
//             </View>

//             <TouchableOpacity style={styles.button} onPress={checkAnswer}>
//                 <Text style={styles.buttonText}>Verificar</Text>
//             </TouchableOpacity>

//             <View style={styles.attemptsContainer}>
//                 {renderHearts()}
//             </View>

//             <Text style={styles.message}>{message}</Text>

//             {attempts === 0 ? ( // Exibe o botão de reiniciar se as tentativas acabarem
//                 <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
//                     <Text style={styles.resetButtonText}>Tentar Novamente</Text>
//                 </TouchableOpacity>
//             ) : null}
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         backgroundColor: '#f2f2f2',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     instructions: {
//         fontSize: 16,
//         marginBottom: 20,
//         textAlign: 'center',
//     },
//     draggableContainer: {
//         flexDirection: 'row',
//         marginBottom: 20,
//     },
//     box: {
//         width: 60,
//         height: 60,
//         borderRadius: 5,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginHorizontal: 5,
//     },
//     label: {
//         fontSize: 20,
//         color: 'white',
//         fontWeight: 'bold',
//     },
//     button: {
//         backgroundColor: 'purple',
//         padding: 10,
//         borderRadius: 5,
//         marginTop: 20,
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 18,
//     },
//     attemptsContainer: {
//         flexDirection: 'row',
//         marginTop: 20,
//     },
//     heart: {
//         marginHorizontal: 5,
//     },
//     message: {
//         marginTop: 20,
//         fontSize: 18,
//         color: 'purple',
//     },
//     resetButton: {
//         backgroundColor: 'purple',
//         padding: 10,
//         borderRadius: 5,
//         marginTop: 20,
//     },
//     resetButtonText: {
//         color: 'white',
//         fontSize: 18,
//     },
// });
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DraggableFlatList from 'react-native-draggable-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome';

// Configuração inicial das cores e posições
const initialColors = [
    { id: 'G', label: 'G', color: 'green' },
    { id: 'R', label: 'R', color: 'red' },
    { id: 'Y', label: 'Y', color: 'yellow' },
    { id: 'O', label: 'O', color: 'orange' },
];

// Definindo múltiplas ordens corretas
const correctOrders = [
    ['R', 'O', 'Y', 'G'], // Ordem 1
];

export default function GameScreen() {
    const [data, setData] = useState(initialColors);
    const [attempts, setAttempts] = useState(3); // 3 corações iniciais
    const [message, setMessage] = useState('');

    // Função que verifica a posição correta dos elementos
    const checkAnswer = () => {
        const userOrder = data.map(item => item.id);

        // Verifica se a ordem do usuário corresponde a qualquer uma das ordens corretas
        const isCorrect = correctOrders.some(correctOrder =>
            correctOrder.every((color, index) => color === userOrder[index])
        );

        if (!isCorrect) {
            setMessage('Muito bom, você acertou!');
        } else {
            if (attempts > 1) {
                setAttempts(attempts - 1);
                setMessage('Você errou, Tente novamente!');
            } else {
                setMessage('Você perdeu! Tente novamente.');
            }
        }
    };

    // Função para reiniciar a fase
    const resetGame = () => {
        setData(initialColors);
        setAttempts(3);
        setMessage('');
    };

    // Renderiza os corações com base nas tentativas
    const renderHearts = () => {
        return Array.from({ length: attempts }, (_, i) => (
            <Icon key={i} name="heart" size={20} color="purple" style={styles.heart} />
        ));
    };

    // Renderiza cada item da lista
    const renderItem = ({ item, drag, isActive }) => (
        <TouchableOpacity
            style={[styles.box, { backgroundColor: isActive ? '#ccc' : item.color, opacity: isActive ? 0.5 : 1 }]}
            onLongPress={drag}
            delayLongPress={1} // Tempo menor para iniciar o arrasto
            disabled={isActive} // Desabilita interação enquanto arrastando
        >
            <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.instructions}>
                Organize as cores (R, O, Y, G) de acordo com a regra:
                {'\n'}Elas NÃO podem estar na ordem R-O-Y-G original.
            </Text>

            <View style={styles.draggableContainer}>
                <DraggableFlatList
                    data={data}
                    onDragEnd={({ data }) => setData(data)}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    horizontal
                />
            </View>

            <TouchableOpacity style={styles.button} onPress={checkAnswer}>
                <Text style={styles.buttonText}>Verificar</Text>
            </TouchableOpacity>

            <View style={styles.attemptsContainer}>
                {renderHearts()}
            </View>

            <Text style={styles.message}>{message}</Text>

            {attempts === 0 ? ( // Exibe o botão de reiniciar se as tentativas acabarem
                <TouchableOpacity style={styles.resetButton} onPress={resetGame}>
                    <Text style={styles.resetButtonText}>Tentar Novamente</Text>
                </TouchableOpacity>
            ) : null}
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
    instructions: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    draggableContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    box: {
        width: 60,
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    label: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
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
    attemptsContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    heart: {
        marginHorizontal: 5,
    },
    message: {
        marginTop: 20,
        fontSize: 18,
        color: 'purple',
    },
    resetButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
    resetButtonText: {
        color: 'white',
        fontSize: 18,
    },
});
