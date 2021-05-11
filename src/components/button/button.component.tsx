import React, { useMemo } from 'react';
import { buttonSetPropertiesHelper } from './helpers';

export interface ArgoButtonProps {
  /**
   * Choose the size of button
  */
  size?: 'small' | 'medium' | 'large';
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
      return buttonSetPropertiesHelper(props);
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