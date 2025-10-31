import {
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  StyleSheet,
  TextStyle,
  StyleProp,
} from 'react-native';
import { FontSize, StyleType } from 'types/index';
import { Typography, RowComponent } from '../components';
import { RootState, useAppSelector } from 'redux/store';
import Icons, { IconComponentProps } from './Icons';
import { cn, COLORS } from '../lib';

type SlotTypes = 'base' | 'prefix' | 'suffix' | 'container';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  style?: StyleType;
  containerStyle?: StyleType;
  textStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  loading?: boolean;
  loaderColor?: string;
  loaderSize?: 'small' | 'large';
  startIcon?: IconComponentProps;
  endIcon?: IconComponentProps;
  classNames?: Partial<Record<SlotTypes, string>>;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  disabled,
  endIcon,
  loading = false,
  startIcon,
  containerStyle,
  loaderColor = COLORS.WHITE,
  loaderSize = 'small',
  className,
  classNames,
  ...props
}) => {
  const isAppLoading = useAppSelector((state: RootState) => state.app.isAppLoading);
  const buttonStyles = [
    styles.button,
    disabled || (loading && isAppLoading) ? styles.disabledButton : null,
    style,
  ];

  const textStyles = [
    styles.text,
    // disabled || loading ? styles.disabledText : null,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled || (loading && isAppLoading)}
      className={cn(className, classNames?.base)}
      {...props}
    >
      {loading && isAppLoading ? (
        <ActivityIndicator color={loaderColor} size={loaderSize} />
      ) : (
        <RowComponent style={[{ gap: 10, justifyContent: 'center' }, containerStyle]}>
          {startIcon && <Icons {...startIcon} />}
          <Typography style={textStyles}>{title}</Typography>
          {endIcon && <Icons {...endIcon} />}
        </RowComponent>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    opacity: 1,
  },
  disabledButton: {
    backgroundColor: COLORS.PRIMARY,
    opacity: 0.5,
  },
  text: {
    color: COLORS.WHITE,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontSize: FontSize.MediumLarge,
  },
  disabledText: {
    color: COLORS.DARK_GREY,
  },
});

export default Button;
