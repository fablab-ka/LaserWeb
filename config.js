require('dotenv').load({ silent: true });

var config = {};

config.webPort = process.env.WEB_PORT || 8000;
config.serialBaudRate = process.env.SERIAL_BAUD_RATE || 57600;
config.webcamPort = process.env.WEBCAM_PORT || 8080;  // expects a webcam stream from mjpg_streamer
config.xmax = process.env.X_MAX || 1220 // Max length of X Axis in mm
config.ymax = process.env.Y_MAX || 610 // Max length of Y Axis in mm
config.gcodePreamble = [
  'G90',
  'G0 Z 90',
  'M82'
];

config.gcodePostamble = [
  'M83',
  'G0 X0 Y0'
];

module.exports = config;
