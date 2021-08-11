// for the peformance turning
// https://blog.gtsop.me/jitsi-meet-performance-tuning.html
config.disableAudioLevels = true;
config.enableNoAudioDetection = false;
config.enableNoisyMicDetection = false;

config.enableLayerSuspension = true;

// p2p related
if (!config.hasOwnProperty('p2p')) config.p2p = {};
config.p2p.stunServers = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'stun:stun2.l.google.com:19302' },
  { urls: 'stun:stun3.l.google.com:19302' },
  { urls: 'stun:stun4.l.google.com:19302' },
  { urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' },
];

// video queality
if (!config.hasOwnProperty('constraints')) config.constraints = {};
config.constraints = {
  aspectRatio: 16 / 9,
  video: {
    height: {
      ideal: 480,
      max: 480,
      min: 240,
    },
    frameRate: {
      max: 30,
    },
  },
};
config.maxFps = 30;
config.resolution = 480;

if (!config.hasOwnProperty('videoQuality')) config.videoQuality = {};
config.videoQuality.maxBitratesVideo = {
  low: 88889,
  standard: 222223,
  high: 666667,
};
config.startBitrate = "356";

// sub pages
config.prejoinPageEnabled = false;
config.enableWelcomePage = false;
config.enableClosePage = false;

// Options related to the remote participant menu.
if (!config.hasOwnProperty('remoteVideoMenu')) config.remoteVideoMenu = {};
config.remoteVideoMenu.disableKick = true;

config.disableRemoteMute = true;
config.disableRemoteControl = true;
