import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  rightGrid: {
    backgroundColor: "#229aca",
    height: "100vh",
    textAlign: "center",
    color: "white",
    lineHeight: "2rem",
  },
  leftGrid: {
    height: "100vh",
    padding: "3%",
  },
  logo: {
    color: "#0892d0",
  },
  imageAlign: {
    margin: "10% 0",
  },
  textBox: {
    // backgroundColor: "#add8e6",
    margin: "5% 0",
  },
  buttonCss: {
    padding: "4% 20%",
    borderRadius: "10px",
    margin: "5% 0",
  },
  actionBtn: {
    border: "1px solid black",
    padding: "3% 8%",
    margin: "0 10%",
  },
  loginCred: {
    width: "15%",
    position: "absolute",
    bottom: 0,
    right: "50%",
    padding: "0 10px",
  },
  loginCredHead: {
    color: "red",
  },
}));

export default useStyles;
