import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(255 255 255)",
    alignItems: "center",
    justifyContent: "center",
  },

  paco: {
    padding: 20,
  },

  botao: {
    backgroundColor: "#000080",
    width: 200,
    height: 40,
    borderRadius: 20,
    textAlign: "center",
    shadowColor: "#000080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,
    padding: 20,
  },

  botaoo: {
    backgroundColor: "#F0E68C",
    width: 200,
    height: 40,
    borderRadius: 20,
    textAlign: "center",
    shadowColor: "#F0E68C",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,
  },

  botaooo: {
    backgroundColor: "#DC143C",
    width: 120,
    height: 120,
    borderRadius: 20,
    textAlign: "center",
    shadowColor: "#DC143C",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 50,
  },

  textb: {
    textAlign: "center",
    marginTop: 12,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    position: "relative",
  },

  texta: {
    textAlign: "center",
    marginTop: -10,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    position: "relative",
  },

  aviso: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginLeft: 10,
  },
});

export default styles;
