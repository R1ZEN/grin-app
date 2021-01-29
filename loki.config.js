module.exports = {
  'chromeSelector': '.wrapper > *, #root > *, .story-decorator > *',
  'diffingEngine': 'looks-same',
  'configurations': {
    'chrome.laptop': {
      'target': 'chrome.app',
      'width': 1366,
      'height': 768,
      'deviceScaleFactor': 1,
      'mobile': false,
    },
  },
};