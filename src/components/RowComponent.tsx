import { StyleSheet, TouchableOpacity } from 'react-native';
import { CommonProps } from 'types/index';
import { FLEX_BETWEEN } from 'lib/index';
// import { useTranslation } from 'hooks/index';

interface Props extends CommonProps {
  onPress?: () => void;
  isRightLeftJustify?: boolean;
  activeOpacity?: number;
  hitSlop?: number;
}
const RowComponent = ({
  children,
  style,
  onPress,
  hitSlop,
  isRightLeftJustify = false,
  ...restProps
}: Props) => {
  // const { isLangRTL } = useTranslation();
  const isLangRTL = false; // Replace with actual RTL detection logic
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={onPress ? false : true}
      activeOpacity={onPress ? 0.5 : 1}
      style={[
        styles.row,
        { flexDirection: isLangRTL ? 'row-reverse' : 'row' },
        isRightLeftJustify && {
          justifyContent: isLangRTL ? 'flex-start' : 'flex-end',
        },
        style,
      ]}
      hitSlop={hitSlop}
      {...restProps}
    >
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: FLEX_BETWEEN,
});

export default RowComponent;
