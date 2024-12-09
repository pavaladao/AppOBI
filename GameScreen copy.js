import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const initialColors = [
    { id: 'R', label: 'R', color: 'red' },
    { id: 'O', label: 'O', color: 'orange' },
    { id: 'Y', label: 'Y', color: 'yellow' },
    { id: 'G', label: 'G', color: 'green' },
];

const dropZoneSize = 4;

export default function GameScreen() {
    const [data, setData] = useState(
        initialColors.map((item) => ({ ...item, pan: new Animated.ValueXY() }))
    );
    const [droppedItems, setDroppedItems] = useState(Array(dropZoneSize).fill(null));
    const [attempts, setAttempts] = useState(3);
    const [message, setMessage] = useState('');
    const [draggedItem, setDraggedItem] = useState(null);
    const [originIndex, setOriginIndex] = useState(null);

    const correctOrders = [
        ['Y', 'G', 'R', 'O'], // Primeira ordem correta possível
        ['G', 'Y', 'O', 'R'], // Segunda ordem correta possível
        // Adicione mais ordens corretas conforme necessário
    ];

    const checkAnswer = () => {
        const userOrder = droppedItems.map(item => item ? item.id : null);
        const isCorrect = correctOrders.some(
            (order) => JSON.stringify(order) === JSON.stringify(userOrder)
        );

        if (isCorrect) {
            setMessage('Correto!');
        } else {
            setAttempts(attempts - 1);
            setMessage('Tente novamente!');
            resetPositions(); // Retorna os blocos às posições iniciais
        }
    };


    const resetPositions = () => {
        // Reseta as posições dos itens para a área de arrasto e esvazia a dropZone
        const resetData = initialColors.map((item) => ({ ...item, pan: new Animated.ValueXY() }));
        setData(resetData);
        setDroppedItems(Array(dropZoneSize).fill(null)); // Esvazia a dropZone
    };

    const handleDrop = (index) => {
        if (draggedItem && !droppedItems[index]) {
            const newDroppedItems = [...droppedItems];
            newDroppedItems[index] = draggedItem;
            setDroppedItems(newDroppedItems);

            const newData = [...data];
            newData[originIndex] = null;
            setData(newData);
            setDraggedItem(null);
            setOriginIndex(null);
        }
    };

    const renderDraggableItem = (item, index) => {
        if (!item) {
            return (
                <View key={`placeholder-${index}`} style={[styles.box, styles.placeholder]}>
                    <Text style={styles.label}>{''}</Text>
                </View>
            );
        }

        return (
            <PanGestureHandler
                key={item.id}
                onGestureEvent={Animated.event(
                    [{ nativeEvent: { translationX: item.pan.x, translationY: item.pan.y } }],
                    { useNativeDriver: false }
                )}
                onHandlerStateChange={({ nativeEvent }) => {
                    if (nativeEvent.state === State.BEGAN) {
                        setDraggedItem(item);
                        setOriginIndex(index);
                        item.pan.setOffset({ x: item.pan.x._value, y: item.pan.y._value });
                        item.pan.setValue({ x: 0, y: 0 });
                    }
                    if (nativeEvent.state === State.END) {
                        const dropIndex = Math.floor(nativeEvent.absoluteX / 80);
                        handleDrop(dropIndex);
                        item.pan.flattenOffset();
                        Animated.spring(item.pan, {
                            toValue: { x: 0, y: 0 },
                            useNativeDriver: false,
                        }).start();
                    }
                }}
            >
                <Animated.View style={[styles.box, { backgroundColor: item.color }, { transform: [{ translateX: item.pan.x }, { translateY: item.pan.y }] }]}>
                    <Text style={styles.label}>{item.label}</Text>
                </Animated.View>
            </PanGestureHandler>
        );
    };

    return (
        <GestureHandlerRootView style={styles.container}>
            <Text style={styles.instructions}>
                Arraste as letras (R, O, Y, G) para a área abaixo e organize-as corretamente.
            </Text>

            <View style={styles.draggableContainer}>
                {data.map((item, index) => renderDraggableItem(item, index))}
            </View>

            <View style={styles.dropZone}>
                {Array.from({ length: dropZoneSize }, (_, index) => (
                    <TouchableOpacity key={`drop-${index}`} style={styles.dropSquare} onPress={() => handleDrop(index)}>
                        {droppedItems[index] && (
                            <View style={[styles.box, { backgroundColor: droppedItems[index].color }]}>
                                <Text style={styles.label}>{droppedItems[index].label}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            <TouchableOpacity style={styles.button} onPress={checkAnswer}>
                <Text style={styles.buttonText}>Verificar</Text>
            </TouchableOpacity>

            <View style={styles.attemptsContainer}>
                {Array.from({ length: attempts }, (_, i) => (
                    <Icon key={`heart-${i}`} name="heart" size={20} color="purple" style={styles.heart} />
                ))}
            </View>

            <Text style={styles.message}>{message}</Text>
        </GestureHandlerRootView>
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
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dropZone: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20,
    },
    dropSquare: {
        width: 60,
        height: 60,
        backgroundColor: '#e0e0e0',
        borderStyle: 'dashed',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    box: {
        width: 60,
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    placeholder: {
        backgroundColor: 'lightgray',
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
});
