import React, { useMemo } from 'react';
import { buttonColorTypeHelper } from './helpers/button-color-type.helper';
import { buttonSizeHelper } from './helpers/button-size.helper';
import { buttonVariantHelper } from './helpers/button-variant.helper';

export interface ArgoButtonProps {
  /**
   * Choose the size of button
  */
  size?: 'small' | 'medium' | 'large';
  /**
   * If neccessary, choose custom sizePx of buttonn
  */
  sizePx?: number;
  /**
   * If neccessary, chose custom css
  */
  customCss?: string;
  /**
   * Variants are contained or outlined
  */
  variant?: 'contained' | 'outlined';
  /**
   * The colorType defines the color style
  */
  colorType?: 'primary' | 'secondary' | 'default' | 'link';
}

export const ArgoButton: React.FC<ArgoButtonProps &
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> =
  ({ ...props }) => {
    // Propriedades css aplicadas no elemento
    const properties = useMemo(() => {
      let result: string = '';
      if (props.size) {
        let size = buttonSizeHelper(props.size);
        result = result.concat(` ${size}`);
      }
      if (props.variant) {
        let variant = buttonVariantHelper(props.variant);
        result = result.concat(` ${variant}`);
      }
      if (props.colorType) {
        let colorType = buttonColorTypeHelper(props.colorType);
        result = result.concat(` ${colorType}`);
      }
      return result;
    }, [props])

    return (
      <button
        type="button"
        className={properties}
      >
        {props.children}
      </button>
    )
  }

// Precisa botar default pra buildar. E precisa ter o const por conta do storybook
export default ArgoButton;