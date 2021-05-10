export const buttonSizeHelper = (size: string): string => {
  switch (size) {
    case 'small':
      return 'text-xs';
    case 'medium':
      return 'text-base';
    case 'large':
      return 'text-lg';
    default:
      return 'text-xl';
  }
}