export const buttonVariantHelper = (variant: string, colorType: string): string => {
  let defaultProperties: string = 'rounded px-4 py-1';
  // console.log(colorType)
  switch (variant) {
    case 'outlined':
      switch (colorType) {
        case 'primary':
          return `${defaultProperties} border-solid border border-stone-primaryColor text-stone-primaryColor hover:bg-stone-primaryColor hover:bg-opacity-10`
        case 'secondary':
          return `${defaultProperties} border-solid border border-stone-colorMediumGrey4 text-stone-colorMediumGrey1 hover:bg-stone-colorMediumGrey4 hover:bg-opacity-10`
        default:
          return `border-solid border border-stone-colorMediumGrey1 hover:bg-stone-colorMediumGrey1 hover:bg-opacity-10 ${defaultProperties}`;
      }
    case 'contained':
      switch (colorType) {
        case 'primary':
          return `${defaultProperties} bg-stone-primaryColor text-white`;
        case 'secondary':
          return `${defaultProperties} bg-stone-colorMediumGrey4 text-stone-colorMediumGrey1`;
        default:
          return `bg-stone-colorMediumGrey1 text-white ${defaultProperties}`;
      }
    default:
      return 'px-4 py-1';
  }
}