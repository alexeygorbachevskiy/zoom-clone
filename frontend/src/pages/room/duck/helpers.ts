import { WebRTCState } from "store/stores/web-rtc/types";

interface SetVideo {
  id: string;
  myId: string;
  node: HTMLVideoElement | null;
  webRTC: WebRTCState;
}

export const setVideo = ({ id, node, webRTC, myId }: SetVideo) => {
  webRTC.peerMediaElements[id] = node;

  const video = webRTC.peerMediaElements[id];

  if (!video) {
    return;
  }

  if (id === myId) {
    video.volume = 0;
    video.srcObject = webRTC.localMediaStream;

    return;
  }

  webRTC.peerMediaElements[id].srcObject = webRTC.remoteMediaStreams[id];
};
