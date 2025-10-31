import {
  API_BASE_URL,
  ANDROID_MAP_KEYS,
  IOS_MAP_KEYS,
  PUBLISHABLE_STRIPE_KEY,
  ANDROID_CLIENT_ID,
  IOS_CLIENT_ID,
  WEB_CLIENT_ID,
  OFFLINE_ACCESS,
  APPLE_CLIENT_ID_ANDROID,
  APPLE_REDIRECT_URI,
  APPLE_MERCHANT_ID,
  ANDROID_CHANNEL_ZENDESK,
  MAP_API_KEY,
  IOS_CHANNEL_ZENDESK,
  IS_ALPHA_PHASE,
} from '@env';
import { IconComponentName } from 'types/iconTypes';

export const ENV_CONSTANTS = {
  BASE_URL: API_BASE_URL,
  ANDROID_MAP_KEY: ANDROID_MAP_KEYS,
  IOS_MAP_KEY: IOS_MAP_KEYS,
  STRIPE_KEY: PUBLISHABLE_STRIPE_KEY,
  GOOGLE_ANDROID_CLIENT_ID: ANDROID_CLIENT_ID,
  GOOGLE_WEB_CLIENT_ID: WEB_CLIENT_ID,
  GOOGLE_IOS_CLIENT_ID: IOS_CLIENT_ID,
  GOOGLE_OFFLINE_ACCESS: OFFLINE_ACCESS,
  APPLE_CLIENT_ID_FOR_ANDROID: APPLE_CLIENT_ID_ANDROID,
  APPLE_REDIRECT_URL: APPLE_REDIRECT_URI,
  MERCHANT_ID: APPLE_MERCHANT_ID,
  ZENDESK_ANDROID: ANDROID_CHANNEL_ZENDESK,
  ZENDESK_IOS: IOS_CHANNEL_ZENDESK,
  MAP_API_KEY: MAP_API_KEY,
  IS_ALPHA_PHASE: IS_ALPHA_PHASE === 'true',
};

export const VARIABLES = {
  CATEGORIES: 'Categories',
  //Common
  GRANTED: 'granted',
  CUSTOM: 'Custom',
  UPCOMING: 'Upcoming',
  CANCEL: 'Cancel',
  COMPLETED: 'Completed',

  USER_TOKEN: 'token',
  LANGUAGE: 'user selected language',
  IS_USER_LOGGED_IN: 'Is user logged in?',
  IS_USER_VISITED_THE_APP: "Is user visited the app so don't show onboarding screen.",

  // Booleans
  TRUE: true,
  FALSE: false,

  // Numbers
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  // Add more numbers as needed

  // Strings
  EMPTY_STRING: '',
  SPACE: ' ',
  COMMA: ',',
  QUESTION_MARK: '?',
  DOT: '.',
  UNDERSCORE: '_',
  DASH: '-',
  // Add more strings as needed

  DONE: 'done',
  NEXT: 'next',
  // Commonly used values
  NULL: null,
  UNDEFINED: undefined,
  NAN: NaN,

  // HTTP status codes
  STATUS_OK: 200,
  STATUS_BAD_REQUEST: 400,
  STATUS_UNAUTHORIZED: 401,
  STATUS_FORBIDDEN: 403,
  STATUS_NOT_FOUND: 404,
  STATUS_SERVER_ERROR: 500,

  // Common HTTP methods
  HTTP_GET: 'GET',
  HTTP_POST: 'POST',
  HTTP_PUT: 'PUT',
  HTTP_DELETE: 'DELETE',

  // Time units
  MILLISECONDS_IN_SECOND: 1000,
  SECONDS_IN_MINUTE: 60,
  MINUTES_IN_HOUR: 60,
  HOURS_IN_DAY: 24,
  DAYS_IN_WEEK: 7,
  // Add more time units as needed

  // Common configurations
  DEFAULT_PAGE_SIZE: 20,
  MAX_RETRIES: 3,
  // Add more configurations as needed

  //ICONS:

  FontAwesome: 'FontAwesome' as IconComponentName,
  Entypo: 'Entypo' as IconComponentName,
  Feather: 'Feather' as IconComponentName,
  EvilIcons: 'EvilIcons' as IconComponentName,
  AntDesign: 'AntDesign' as IconComponentName,
  FontAwesome5: 'FontAwesome5' as IconComponentName,
  Ionicons: 'Ionicons' as IconComponentName,
  MaterialCommunityIcons: 'MaterialCommunityIcons' as IconComponentName,
  MaterialIcons: 'MaterialIcons' as IconComponentName,
};

// export const locales = ['en'] as const; // Literal tuple
// export type Locale = (typeof locales)[number]; // Creates a union type "en" | "am"

export const VIDEOS = {
  SPLASH_VIDEO: '/assets/common/splash.mp4',
};

export const SUB_TITLE = '/assets/temp/sub.vtt';

export type Locales = (typeof locales)[number];

export const CONSTANTS = {
  LOCALE: 'Next-Locale',
  COUNTRY: 'US',
  CURRENCY: 'UD',
  AREA_UNIT: 'Sq.Ft.',
  RETURN_URL: 'returnUrl',
  PHONE: '+234 0806 584 1300',
  EMAIL: 'email@mail.com',
  ADDRESS: 'Address',
  TOKEN: 'token',
  USER_ROLE: 'user_role',
  USER_STATUS: 0,
  IS_VERIFIED: 'is_verified_email',
  NOT_AVAILABLE: 'Not Available',
  UDID: 'udid',
  APP_STORE_LINK: '',
  GOOGLE_STORE_LINK: '',
};
