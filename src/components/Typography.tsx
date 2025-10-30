import React from 'react';
import { Text, TextProps, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { FontWeight } from 'types/index';
import { FONT_FAMILY } from '../lib';
import { cn, renderStartEndContent } from '../lib/helper';
import { IconComponentProps } from './Icons';
import { useTranslation } from 'hooks/useTranslation';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
type SlotTypes = 'base' | 'prefix' | 'suffix' | 'content';

interface TypographyProps extends TextProps {
  variant?: Variant;
  children?: string | React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
  fontWeight?: FontWeight;
  prefix?: string | number | React.ReactNode;
  suffix?: string | number | React.ReactNode;
  startEndContent?: Partial<{
    start: IconComponentProps | React.ReactNode;
    end: IconComponentProps | React.ReactNode;
  }>;
  containerStyle?: StyleProp<ViewStyle>;
  text?: string;
  params?: Record<string, any>;
  classNames?: Partial<Record<SlotTypes, string>>;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  style,
  fontWeight,
  onPress,
  prefix,
  suffix,
  startEndContent,
  containerStyle,
  text,
  params,
  className,
  classNames,
  ...restProps
}) => {
  const { t, isLangRTL } = useTranslation();

  const AddfontFamily = (): string => {
    switch (fontWeight) {
      case FontWeight.Light:
        return FONT_FAMILY.GORDITA.LIGHT;
      case FontWeight.Black:
        return FONT_FAMILY.GORDITA.BLACK;
      case FontWeight.Bold:
        return FONT_FAMILY.POPPINS.BOLD;
      case FontWeight.Medium:
      case FontWeight.SemiBold:
        return FONT_FAMILY.POPPINS.MEDIUM;
      default:
        return FONT_FAMILY.POPPINS.REGULAR;
    }
  };

  const variantClasses: Record<Variant, string> = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-sm font-normal',
  };

  const textStyle: TextStyle = {
    fontFamily: AddfontFamily(),
    writingDirection: isLangRTL ? 'rtl' : 'ltr', // ✅ respect RTL
    textAlign: isLangRTL ? 'right' : 'left', // ✅ fix Arabic layout
  };

  const content = text
    ? t(text || (typeof children === 'string' ? children : ''), params)
    : children;

  return (
    <View className={cn('flex-row items-center gap-1.5', classNames?.base)} style={containerStyle}>
      {renderStartEndContent(startEndContent?.start)}

      {prefix && (
        <Text
          style={[textStyle, style]}
          className={cn(variantClasses[variant], classNames?.prefix)}
        >
          {prefix}&nbsp;
        </Text>
      )}

      <Text
        onPress={onPress}
        style={[textStyle, style]}
        className={cn(variantClasses[variant], className, classNames?.content)}
        {...restProps}
      >
        {content}
      </Text>

      {suffix && (
        <Text
          style={[textStyle, style]}
          className={cn(variantClasses[variant], classNames?.suffix)}
        >
          &nbsp;{suffix}
        </Text>
      )}

      {renderStartEndContent(startEndContent?.end)}
    </View>
  );
};

export default Typography;
