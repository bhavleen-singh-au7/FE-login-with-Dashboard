import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    color: "#0892d0",
  },
  body: {
    backgroundColor: "#d7f2f4",
  },
  pagesInfo: {
    margin: "4% 0",
    padding: "4%",
    borderRadius: "10px",
  },
  linearProgress: {
    height: 10,
    borderRadius: 5,
  },
}));

export default useStyles;
