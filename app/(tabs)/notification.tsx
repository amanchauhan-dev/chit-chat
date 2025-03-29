import { ScreenView } from '@/components/ScreenView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotificationScreen() {
  return (
  <ScreenView>
        <ThemedView className='p-4 mt-4'>
          <ThemedText>Notification</ThemedText>
        </ThemedView>
      </ScreenView>
  );
}
