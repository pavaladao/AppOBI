import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Svg, { Line, Circle, Text as SvgText } from "react-native-svg";

const DiagramAndTable = () => {
  const tableHead = ["", "A", "B", "C", "D", "E", "F"];
  const tableData = [
    ["A", "0", "33", "108", "171", "332", "430"],
    ["B", "-", "0", "75", "138", "299", "397"],
    ["C", "-", "-", "0", "63", "224", "322"],
    ["D", "-", "-", "-", "0", "161", "259"],
    ["E", "-", "-", "-", "-", "0", "98"],
    ["F", "-", "-", "-", "-", "-", "0"],
  ];

  // Fator de escala para ajustar o tamanho do diagrama
  const scale = 0.7;

  // Posições ajustadas com escala
  const positions = [
    { x: 30 * scale, y: 0, label: "A" },
    { x: 80 * scale, y: 0, label: "B" },
    { x: 150 * scale, y: 0, label: "C" },
    { x: 230 * scale, y: 0, label: "D" },
    { x: 330 * scale, y: 0, label: "E" },
    { x: 450 * scale, y: 0, label: "F" },
  ];

  return (
    <View style={styles.container}>
      {/* Tabela */}
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          {tableHead.map((col, index) => (
            <Text style={[styles.cell, styles.head]} key={index}>
              {col}
            </Text>
          ))}
        </View>
        {tableData.map((row, rowIndex) => (
          <View style={styles.tableRow} key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <Text
                style={[
                  styles.cell,
                  rowIndex % 2 === 0 ? styles.evenRow : styles.oddRow,
                ]}
                key={cellIndex}
              >
                {cell}
              </Text>
            ))}
          </View>
        ))}
      </View>

      {/* Diagrama */}
      <View style={styles.diagramContainer}>
        <Svg height="100" width="100%">
          {/* Conexões */}
          {positions.map((pos, index) => {
            if (index < positions.length - 1) {
              return (
                <Line
                  key={index}
                  x1={pos.x}
                  y1={pos.y + 40}
                  x2={positions[index + 1].x}
                  y2={positions[index + 1].y + 40}
                  stroke="black"
                  strokeWidth="2"
                />
              );
            }
          })}
          {/* Círculos e Rótulos */}
          {positions.map((pos, index) => (
            <React.Fragment key={index}>
              <Circle cx={pos.x} cy={40} r={5} fill="black" />
              <SvgText
                x={pos.x}
                y={60}
                fill="black"
                fontSize="12"
                textAnchor="middle"
              >
                {pos.label}
              </SvgText>
            </React.Fragment>
          ))}
        </Svg>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  tableContainer: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  tableRow: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    padding: 8,
    textAlign: "center",
    borderWidth: 1,
    borderColor: "#d3d3d3",
  },
  head: {
    backgroundColor: "#f1f8ff",
    fontWeight: "bold",
  },
  evenRow: {
    backgroundColor: "#fff",
  },
  oddRow: {
    backgroundColor: "#f9f9f9",
  },
  diagramContainer: {
    marginTop: 20,
    alignItems: "center",
    width: "100%",
  },
});

export default DiagramAndTable;
