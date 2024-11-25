import React from 'react';
import { StyleSheet, View } from 'react-native';
import Video from 'react-native-video';

interface PlayerProps {
  username: string;
}

const HLSPlayer: React.FC<PlayerProps> = ({ username }) => {
  //const streamUrl = `https://eu1.cdn.xyra.tv/live/${username}/index.m3u8`;
  const streamUrl = `https://video-weaver.prg03.hls.ttvnw.net/v1/playlist/Cs0ER2fCPct0Rjy3Za5ZKQY7C_qEA2AR0UhunYUEXSx7V0iRl-azcd58FxL5gvgqZKJzde0xqQMTeZZvjfz7wpN6ZWVPqIcFq2N1NrNu55gxwb7F86UK1z4FCisuZ7eYsfW4nKSphKDZsRpIKuvMUURjkb8CkMQkQQZVwHyO2VnlxiH48u6yFG5G24ffrpb16W8ZkfCNy4CdysQEojgfRErU-wBCmoFxMjNS8yLRZDmLb1zZovwCXSLnpe8YFH_-QdPa9RpixoTdrUnUPpAhNc3Sxlf444R-jyi8xQ1-0KuV2-1JQ_gE8-hDbKlZWxZ-89Tk8rS9OlrUYyV5qQg9Gy-5XkOA29JLdiL87YkoGpgsMrp_K_oYZQvdfT9GefLUd8Q-YEPe3kQ19Zt_LXviJVvHCiy6kchOc3Q4lW8KDMFYIGQg6TX7s5ZJVWEzUngQSXtELmeV5j_lZgdG8ECnaKJqcFqg6OX3T5DOB2FW34bQ3WAL5RriS_28Nf_V2fEwVQQQ_maQa8sfQyMpwzTDyGg7EMePJzrSP4RHwUX0SDQ_NrkqyYZVdTlGm7jHt_9T7zp5u8vc7CuUYt3TkSZUHUZao87l5qEabF1NOJyYRxtI8HpcQuosbsYzEYXHuZ3RjbRz363pFYxTN-tLIym5V-M_NS3zHBU1cPR3cLIo9IhoEg4hXtKRP4Fk99yaMZVzGXYPB7515lYoJA6DwKJ5q9HDGeYSBXmi-DNvxVPmNvhaTfrxp5KrOrfrYJ29D_scCud6YzjK4uHY8QIcRebUjRoMBrbqZ1OpapLLb903IAEqCWV1LXdlc3QtMjD5Cg.m3u8`;

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: streamUrl }}
        style={styles.video}
        controls={true}
        resizeMode="contain"
        onError={(error) => console.error('Video Error:', error)}
        bufferConfig={{
          minBufferMs: 15000,
          maxBufferMs: 30000,
          bufferForPlaybackMs: 2500,
          bufferForPlaybackAfterRebufferMs: 5000,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default HLSPlayer;