//Importações
import { Text, Image, View, TouchableOpacity } from "react-native";
import styles from "./src/style/StyleSheet";
import TouchOpComponent from "./src/components/TouchOpComponent";

//Funções para os botões
pressButtonnn = () => {
  alert("Uhm a função Log In ainda não está pronta :' (");
};

pressButtonn = () => {
  alert("Uhm a função Sing In ainda não está pronta :' (");
};

pressButton = () => {
  alert("Eu não disse para não clicar? >: (");
};

export default function App() {
  return (
    <View style={styles.container}>
      {/* <TouchOpComponent> é o pai das Childrens */}
      {/* Botão de Log In */}
      <TouchOpComponent>
        <TouchableOpacity style={styles.botao} onPress={pressButtonnn}>
          <Text style={styles.texta}>Log In</Text>
        </TouchableOpacity>
      </TouchOpComponent>

      {/* Botão de Sing In */}
      <TouchOpComponent>
        <TouchableOpacity style={styles.botaoo} onPress={pressButtonn}>
          <Text style={styles.textb}>Sign In</Text>
        </TouchableOpacity>
      </TouchOpComponent>

      {/* Botão contendo a Imagem */}
      <TouchOpComponent>
        <TouchableOpacity style={styles.botaooo} onPress={pressButton}>
          <Image
            source={require("./src/assets/images/Butao.png")}
            style={styles.aviso}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </TouchOpComponent>
    </View>
  );
}
