import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";

export default function RaylandoScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <View style={styles.header}>
        <Text style={styles.logo}>ScoreFit</Text>
      </View>

      {/* Foto e botão */}
      <Image
        source={{ uri: "https://via.placeholder.com/120" }}
        style={styles.photo}
      />
      <TouchableOpacity>
        <Text style={styles.insertPhoto}>Inserir foto</Text>
      </TouchableOpacity>

      {/* Campos de dados */}
      <Text style={styles.label}>Inserir dados pessoais:</Text>

      <TextInput placeholder="Nome" style={styles.input} placeholderTextColor="#777" />
      <TextInput placeholder="Sobrenome" style={styles.input} placeholderTextColor="#777" />
      <TextInput placeholder="Idade" keyboardType="numeric" style={styles.input} placeholderTextColor="#777" />

      {/* Botão */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Acessar histórico de feedbacks</Text>
      </TouchableOpacity>

      {/* Link de retorno */}
      <Link href="/" style={styles.backLink}>
        voltar para a tela inicial
      </Link>

      {/* Rodapé */}
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
    justifyContent: "center",
    paddingVertical: 40,
  },
  header: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  logo: {
    color: "#00cc44",
    fontSize: 22,
    fontWeight: "bold",
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  insertPhoto: {
    color: "#00cc44",
    fontSize: 16,
    marginBottom: 30,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginVertical: 20,
  },
  buttonText: {
    color: "#00cc44",
    fontWeight: "bold",
    textAlign: "center",
  },
  backLink: {
    color: "#aaa",
    textDecorationLine: "underline",
  },
  footer: {
    backgroundColor: "#00cc44",
    width: "100%",
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 40,
  },
  footerText: {
    color: "#000",
    fontSize: 12,
    fontWeight: "bold",
  },
});
