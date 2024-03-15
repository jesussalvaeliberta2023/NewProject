//Impotações
import { TouchableOpacity } from "react-native";
import styles from "../style/StyleSheet";

//Fazendo o pai aceitar o Filho
export default function TouchOpComponent({ children }) {
  return <TouchableOpacity style={styles.paco}>{children}</TouchableOpacity>;
}
