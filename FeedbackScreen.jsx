import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState("");

  const handleAnonimo = () => {
    console.log("Feedback anônimo:", feedback);
  };

  const handleExplicito = () => {
    console.log("Feedback explícito:", feedback);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.logo}>ScoreFit</Text>
      <Text style={styles.title}>Envie seu feedback</Text>

      <View style={styles.feedbackBox}>
        <Text style={styles.label}>Detalhe seu feedback:</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={4}
          value={feedback}
          onChangeText={setFeedback}
          placeholder="Escreva aqui..."
          placeholderTextColor="#999"
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleAnonimo}>
        <Text style={styles.buttonText}>Registrar de forma anônima</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleExplicito}>
        <Text style={styles.buttonText}>Registrar de forma explícita</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.backText}>voltar para a tela inicial</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Direitos reservados pela ScoreFit ©</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingVertical: 40,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
  },
  logo: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  feedbackBox: {
    backgroundColor: "#fff",
    borderRadius: 6,
    width: "85%",
    padding: 15,
    marginBottom: 30,
  },
  label: {
    color: "#000",
    marginBottom: 10,
    fontWeight: "500",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    color: "#000",
    textAlignVertical: "top",
    minHeight: 80,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "80%",
    paddingVertical: 12,
    marginVertical: 8,
  },
  buttonText: {
    color: "green",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  backText: {
    color: "#ccc",
    textDecorationLine: "underline",
    marginTop: 20,
  },
  footer: {
    backgroundColor: "green",
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 40,
  },
  footerText: {
    color: "#fff",
    fontSize: 12,
  },
});
