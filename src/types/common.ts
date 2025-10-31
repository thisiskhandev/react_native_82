import { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type ChildrenType = ReactNode;
// export type TranslationType = TFunction;
export type SvgNameType = FC<SvgProps>;
export type StyleType = StyleProp<ViewStyle>;
export type TextStyleType = StyleProp<TextStyle>;
export type SetStateType<T> = Dispatch<SetStateAction<T>>;
export type voidFuntionType = () => void;

export type CommonProps = {
  children: ChildrenType;
  style?: StyleType;
  className?: string;
};

export enum PROVIDERS {
  GOOGLE = 'google',
  APPLE = 'apple',
  FACEBOOK = 'facebook',
}

export interface PaginationLink {
  url: string | null;
  label: string;
  active: boolean;
}

export interface Pagination {
  current_page: number;
  first_page_url: string;
  from: number | null;
  last_page: number;
  last_page_url: string;
  links: PaginationLink[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number | null;
  total: number;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  token: string;
}
