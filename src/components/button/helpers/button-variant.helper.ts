export const buttonVariantHelper = (variant: string): string => {
  switch (variant) {
    case 'outlined':
      return 'rounded border-solid border px-4 py-1';
    default:
      return 'px-4 py-1';
  }
}