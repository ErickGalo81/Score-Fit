import React, { useState } from "react";
// 1. Adicionado 'Image' aqui
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native"; 
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router"; // Importar o router para os botões

export default function FeedbackScreen() {
  const [feedback, setFeedback] = useState("");

  const handleAnonimo = () => {
    console.log("Feedback anônimo:", feedback);
    // Adicionar lógica de envio aqui
    router.push('/home'); // Exemplo: Voltar para a home após enviar
  };

  const handleExplicito = () => {
    console.log("Feedback explícito:", feedback);
    // Adicionar lógica de envio aqui
    router.push('/home'); // Exemplo: Voltar para a home após enviar
  };

  // Função para os botões de "voltar"
  const handleBack = () => {
    router.push('/home'); // Navega de volta para a aba principal (index)
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <TouchableOpacity style={styles.backButton} onPress={handleBack}>
        <Ionicons name="arrow-back" size={28} color="#fff" />
      </TouchableOpacity>

      {/* 2. O <Text> foi substituído por <Image> */}
      <Image 
        source={require('../assets/images/logo-scorefit.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      
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

      {/* Botão de "voltar" agora funciona */}
      <TouchableOpacity onPress={handleBack}>
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
    zIndex: 1, // Garantir que fique na frente
  },
  // 3. Estilo do logo ajustado para <Image>
  logo: {
    width: 120, // Tamanho similar ao da outra tela
    height: 40,  // Tamanho similar ao da outra tela
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