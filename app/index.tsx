import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native"; 
import { router } from "expo-router"; 

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    console.log("TESTE: O BOTÃO 'ENTRAR' FOI CLICADO");
    console.log("Tentando fazer login com:", email, senha);
    
    // Navega para a tela de feedback após o login.
    router.replace('/home'); 
  }

  function handleRegister() {
    Alert.alert("Registro", "Navegar para a tela de registro.");
    // Ex: router.push('/register'); 
  }

  function handleForgotPassword() {
    Alert.alert("Esqueceu a Senha", "Navegar para a tela de recuperação.");
    // Ex: router.push('/forgot-password');
  }

  return (
    <View style={styles.container}>
      {/* =======================================
        * ALTERAÇÃO FEITA AQUI *
        Caminho da imagem atualizado.
        =======================================
      */}
      <Image 
        // Assumi que a nova imagem também está na pasta 'assets'
        source={require('../assets/images/logo-scorefit.png')}
        style={styles.logoImage} 
      />

      <Text style={styles.title}>Seja bem vindo(a)</Text>
      <Text style={styles.subtitle}>Realize seu login abaixo:</Text>

      <TextInput
        placeholder="Endereço de e-mail"
        placeholderTextColor="#ccc"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#ccc"
        secureTextEntry
        style={styles.input}
        value={senha}
        onChangeText={setSenha}
      />

      <View style={styles.row}>
        <View style={styles.checkRow}>
          <View style={styles.checkbox} />
          <Text style={styles.checkText}>Lembrar senha</Text>
        </View>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.link}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerText}>Registre-se</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>Direitos reservados pela ScoreFit ©</Text>
    </View>
  );
}

// ... (Estilos permanecem os mesmos) ...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoImage: {
    width: 180,
    height: 180,
    resizeMode: 'contain', 
    marginBottom: 40,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "700",
  },
  subtitle: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#111",
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    color: "#fff",
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    width: 18,
    height: 18,
    borderColor: "#fff",
    borderWidth: 1,
    marginRight: 6,
  },
  checkText: {
    color: "#fff",
  },
  link: {
    color: "#00aaff",
  },
  loginButton: {
    backgroundColor: "#00BF39",
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  loginText: {
    color: "#000",
    fontWeight: "700",
    fontSize: 18,
  },
  registerButton: {
    borderColor: "#00BF39",
    borderWidth: 2,
    width: "100%",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginBottom: 15,
  },
  registerText: {
    color: "#00BF39",
    fontWeight: "700",
    fontSize: 18,
  },
  footer: {
    color: "#555",
    fontSize: 12,
    position: "absolute",
    bottom: 20,
  },
});