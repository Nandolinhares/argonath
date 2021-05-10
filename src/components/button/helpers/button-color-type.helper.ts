export const buttonColorTypeHelper = (colorType: string): string => {
  switch (colorType) {
    case 'primary':
      return 'text-stone-primaryColor border-stone-primaryColor hover:bg-stone-primaryColor hover:bg-opacity-10';
    default:
      return 'text-stone-colorMediumGrey border-stone-colorMediumGrey hover:bg-stone-colorPurple hover:bg-opacity-10';
  }
}