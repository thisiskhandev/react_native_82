import { isIOS } from './helper';

export const FONT_FAMILY = {
  GORDITA: {
    BLACK: isIOS() ? 'Gordita-Black' : 'GorditaBlack',
    BOLD: isIOS() ? 'Gordita-Bold' : 'GorditaBold',
    MEDIUM: isIOS() ? 'Gordita-Medium' : 'GorditaMedium',
    REGULAR: isIOS() ? 'Gordita-Regular' : 'GorditaRegular',
    LIGHT: isIOS() ? 'Gordita-Light' : 'GorditaLight',
  },
  POPPINS: {
    BOLD: isIOS() ? 'Poppins-Bold' : 'PoppinsBold',
    MEDIUM: isIOS() ? 'Poppins-Medium' : 'PoppinsMedium',
    REGULAR: isIOS() ? 'Poppins-Regular' : 'PoppinsRegular',
  },
};

// 👇 Industry-standard, mobile-optimized type scale
export const FONT_SIZES = {
  // Headings (Display)
  h1: 34, // App title / big headers
  h2: 28, // Section headers
  h3: 24, // Subsection or screen title
  h4: 20, // Smaller section title
  h5: 18, // Minor heading
  h6: 16, // Uppercase labels or meta text
  body: 14, // Secondary text
  bodysm: 12, // Footnotes or metadata
  caption: 11, // Helper text / subtle info
  overline: 10, // Tiny uppercase labels
  sm: 8,
};
