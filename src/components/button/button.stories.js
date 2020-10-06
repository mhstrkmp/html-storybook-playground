import "./button.css";
import buttonPrimary from "./button-primary.html";
import buttonSecondary from "./button-secondary.html";
import buttonContent from "./button-content.html";

export default { title: "Components/Button" };

export const primary = () => buttonPrimary;
export const secondary = () => buttonSecondary;
export const content = () => buttonContent;
