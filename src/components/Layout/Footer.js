import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={classes.footer} onClick={props.onClick}>
      <p>{props.title}</p>
    </div>
  );
};

export default Footer;
