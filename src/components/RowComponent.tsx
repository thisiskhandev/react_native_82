import { TouchableOpacity } from 'react-native';
import { CommonProps } from 'types/index';
import { useTranslation } from 'hooks/index';
import { cn } from 'lib/helper';

interface Props extends CommonProps {
  onPress?: () => void;
  isRightLeftJustify?: boolean;
  activeOpacity?: number;
  hitSlop?: number;
}

const RowComponent = ({
  children,
  className = '',
  onPress,
  hitSlop,
  isRightLeftJustify = false,
  ...restProps
}: Props) => {
  const { isLangRTL } = useTranslation();

  const flexDirectionClass = isLangRTL ? 'flex-row-reverse' : 'flex-row';
  const justifyClass = isRightLeftJustify
    ? isLangRTL
      ? 'justify-start'
      : 'justify-end'
    : 'justify-between';

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={onPress ? 0.5 : 1}
      hitSlop={hitSlop}
      className={cn('items-center', flexDirectionClass, justifyClass, className)}
      {...restProps}
    >
      {children}
    </TouchableOpacity>
  );
};

// const styles = StyleSheet.create({
//   row: FLEX_BETWEEN,
// });

export default RowComponent;
