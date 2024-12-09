import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const LogicDiagram = ({
  leftText,
  isLeftTextStriked = false,
  rightText,
  isRightTextStriked = false,
  rule,
  arrowType = "right", // "right", "left", "both"
  isArrowStriked = false,
  fontSize = 24, // Tamanho padrão da fonte
}) => {
  const arrowSize = fontSize * 1.2;

  const StrikedArrow = ({ children }) => (
    <View style={styles.arrowContainer}>
      {children}
      {isArrowStriked && (
        <View
          style={[
            styles.diagonalBar,
            {
              width: arrowSize * 0.9,
              height: arrowSize * 0.08,
              top: arrowSize / 2 - arrowSize * 0.05, // Centraliza no eixo vertical
              left: arrowSize / 2 - arrowSize * 0.08,
            },
          ]}
        />
      )}
    </View>
  );

  const renderArrow = () => {
    if (arrowType === "both") {
      return (
        <StrikedArrow>
          <View style={styles.bothArrowsContainer}>
            <FontAwesome
              name="long-arrow-left"
              size={arrowSize}
              color="black"
              style={{ marginRight: -Math.ceil(arrowSize * 0.3) }} // Proximidade ajustada
            />
            <FontAwesome name="long-arrow-right" size={arrowSize} color="black" />
          </View>
        </StrikedArrow>
      );
    }
    const arrowName = arrowType === "left" ? "long-arrow-left" : "long-arrow-right";
    return (
      <FontAwesome
        name={arrowName}
        size={arrowSize}
        color="black"
        style={isArrowStriked && styles.strikeIcon}
      />
    );
  };

  const StrikedText = ({ text, isStriked }) => (
    <View style={styles.textContainer}>
      <Text style={[styles.text, { fontSize }]}>{text}</Text>
      {isStriked && (
        <View
          style={[
            styles.diagonalBar,
            {
              width: fontSize * 2.5, // Largura proporcional ao tamanho da fonte
              height: fontSize * 0.1, // Altura proporcional ao tamanho da fonte
              top: fontSize / 2 - (fontSize * 0.1) / 2, // Centraliza no eixo vertical
            },
          ]}
        />
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Left Text */}
        <StrikedText text={leftText} isStriked={isLeftTextStriked} />

        {/* Arrow */}
        <View style={styles.arrowContainer}>{renderArrow()}</View>

        {/* Right Text */}
        <StrikedText text={rightText} isStriked={isRightTextStriked} />
      </View>

      {/* Rule */}
      <Text style={[styles.ruleText, { fontSize: fontSize * 0.6 }]}>{rule}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    // maxWidth: '60%',
  },
  text: {
    fontWeight: "bold",
  },
  diagonalBar: {
    position: "absolute",
    width: "180%", // Ligeiramente maior que o texto
    backgroundColor: "black",
    transform: [{ rotate: "135deg" }],
  },
  arrowContainer: {
    marginHorizontal: 10,
  },
  bothArrowsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  strikeIcon: {
    textDecorationLine: "line-through",
  },
  ruleText: {
    marginTop: 10,
    textAlign: "center",
  },
});

export default LogicDiagram;
