import { buttonSizeHelper, buttonVariantHelper } from ".";
import { ArgoButtonProps } from "../button.component";

export const buttonSetPropertiesHelper = (props: ArgoButtonProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>): string => {
  let result: string = '';
  if (props.size) {
    let size = buttonSizeHelper(props.size);
    result = result.concat(` ${size}`);
  }
  if (props.variant) {
    let variant = buttonVariantHelper(props.variant, props.colorType);
    result = result.concat(` ${variant}`);
  }
  if (props.customCss) {
    result = result.concat(` ${props.customCss}`);
  }
  return result;
}