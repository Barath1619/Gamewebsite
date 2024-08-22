import styles from "./Button.module.css";

interface props {
  title: String;
  onClicked: () => void;
  color?: "primary" | "secondary" | "danger";
}
const Button = ({ title, onClicked, color = "primary" }: props) => {
  return (
    <button
      type="button"
      className={[styles.btn, styles["btn-" + color]].join(" ")}
      onClick={onClicked}
    >
      {title}
    </button>
  );
};

export default Button;
