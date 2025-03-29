import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';


export function ScreenView({ className, ...otherProps }: ViewProps) {
    // { backgroundColor }
    return <View className={'px-4 ' + className} {...otherProps} />;
}
