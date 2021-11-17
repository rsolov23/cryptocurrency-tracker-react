import { makeStyles } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid #D4AF37",
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "'Montserrat Alternates', sans-serif",
      cursor: "pointer",
      backgroundColor: selected ? "#D4AF37" : "",
      color: selected ? "#000000" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "#D4AF37",
        color: "#000000",
      },
      width: "22%",
      // margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
