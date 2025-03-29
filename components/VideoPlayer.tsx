import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import { View, Button, Dimensions } from 'react-native';

import ved from "@/assets/video.mp4"

export default function VideoScreen() {
  const player = useVideoPlayer(ved, player => {
    player.loop = true;
    player.play();
  });


  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View >
      <VideoView style={{
        width: Dimensions.get('window').width - 100,
        height: 200
      }} player={player} allowsFullscreen allowsPictureInPicture />
    </View>
  );
}
