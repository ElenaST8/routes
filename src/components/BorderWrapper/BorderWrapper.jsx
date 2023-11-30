import styles from "./borderWrapper.module.css";

const BorderWrapper = (props) => {
  //   console.log(props.children);
  const { children, showDefaultText } = props;
  return (
    <div className={styles["common"]}>
      {showDefaultText ? "Degault text..." : children}
    </div>
  );
};

export default BorderWrapper;
