// p2p related
if (!config.hasOwnProperty('p2p')) config.p2p = {};
config.p2p.stunServers = [
  { urls: 'stun:meet-jit-si-turnrelay.jitsi.net:443' },
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun2.l.google.com:19302' },
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
