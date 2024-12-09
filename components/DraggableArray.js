import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Dimensions,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';

const DraggableArray = ({ validConfigs, blocks, arraySize, initialNumPossibilities, showIndexes = true }) => {
  const [positions, setPositions] = useState(Array(arraySize).fill(null));
  const [remainingBlocks, setRemainingBlocks] = useState(blocks);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [slotCenters, setSlotCenters] = useState([]);
  const [numPossibilities, setNumPossibilities] = useState(initialNumPossibilities);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalMessageColor, setModalMessageColor] = useState('black');
  const testedConfigs = useRef(new Set());

  const panValues = useRef(blocks.map(() => new Animated.ValueXY())).current;
  const slotSize = 50;

  useEffect(() => {
    const { width } = Dimensions.get('window');
    const startX = (width - slotSize * arraySize) / 2;
    const centers = Array.from({ length: arraySize }, (_, i) => startX + i * slotSize + slotSize / 2);
    setSlotCenters(centers);
  }, [arraySize, slotSize]);

  const showModal = (message, color) => {
    setModalMessage(message);
    setModalMessageColor(color);
    setModalVisible(true);
  };

  const handleRelease = (index) => {
    if (hoverIndex !== null && positions[hoverIndex] === null) {
      const newPositions = [...positions];
      newPositions[hoverIndex] = remainingBlocks[index];
      setPositions(newPositions);

      const newRemainingBlocks = remainingBlocks.filter((_, i) => i !== index);
      setRemainingBlocks(newRemainingBlocks);

      if (newRemainingBlocks.length === 0) {
        checkConfig(newPositions);
      }
    }

    Animated.spring(panValues[index], {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
    setHoverIndex(null);
  };

  const checkConfig = (config) => {
    const configString = JSON.stringify(config);
    if (testedConfigs.current.has(configString)) {
      showModal('Essa possibilidade já foi testada antes.', 'red');
      resetPositions();
    } else {
      testedConfigs.current.add(configString);
      const isValid = validConfigs.some((validConfig) => JSON.stringify(validConfig) === configString);

      if (isValid) {
        setNumPossibilities((prev) => prev - 1);
        showModal('Configuração Correta!', 'green');
      } else {
        showModal('Configuração Errada', 'red');
      }

      resetPositions();
    }
  };

  const resetPositions = () => {
    setPositions(Array(arraySize).fill(null));
    setRemainingBlocks(blocks);
    panValues.forEach((pan) => pan.setValue({ x: 0, y: 0 }));
  };

  const handleGestureEvent = (index) => (e) => {
    panValues[index].setValue({
      x: e.nativeEvent.translationX,
      y: e.nativeEvent.translationY,
    });

    const fingerCenterX = e.nativeEvent.absoluteX;
    const newHoverIndex = slotCenters.findIndex(
      (center) => Math.abs(fingerCenterX - center) < slotSize / 2
    );
    setHoverIndex(newHoverIndex >= 0 && newHoverIndex < arraySize ? newHoverIndex : null);
  };

  const handleHandlerStateChange = (index) => (e) => {
    if (e.nativeEvent.state === State.END) {
      handleRelease(index);
    }
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.remainingText}>Possibilidades Restantes: {numPossibilities}</Text>
      <View style={styles.blocksContainer}>
        {remainingBlocks.map((block, index) => (
          <PanGestureHandler
            key={index}
            onGestureEvent={handleGestureEvent(index)}
            onHandlerStateChange={handleHandlerStateChange(index)}
          >
            <Animated.View
              style={[styles.block, { transform: panValues[index].getTranslateTransform() }]}
            >
              <Text style={styles.blockText}>{block}</Text>
            </Animated.View>
          </PanGestureHandler>
        ))}
      </View>

      <View style={styles.arrayContainer}>
        {positions.map((pos, index) => (
          <View key={index} style={styles.slotItem}>
            <View
              style={[styles.arraySlot, hoverIndex === index ? styles.hoveredSlot : null]}
            >
              <Text style={styles.arrayText}>{pos || '_'}</Text>
            </View>
            {showIndexes && <Text style={styles.indexText}>{index + 1}</Text>}
          </View>
        ))}
      </View>

      {/* Modal para feedback */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={[styles.modalText, { color: modalMessageColor }]}>{modalMessage}</Text>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.modalButton}
            >
              <Text style={styles.modalButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  remainingText: {
    fontSize: 18,
    color: '#4b5563',
    marginBottom: 20,
  },
  blocksContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  block: {
    width: 48,
    height: 48,
    backgroundColor: 'white',
    borderRadius: 24,
    marginHorizontal: 6,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#bfdbfe',
  },
  blockText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  arrayContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  slotItem: {
    alignItems: 'center',
    marginHorizontal: 4,
  },
  arraySlot: {
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: '#d1d5db',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
  },
  arrayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  hoveredSlot: {
    backgroundColor: '#c1c1c1',
  },
  indexText: {
    marginTop: 4,
    fontSize: 14,
    color: '#6b7280',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DraggableArray;
