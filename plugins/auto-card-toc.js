const { updateAllIndexes, startWatcher } = require('../scripts/generate-card-indexes');

let watcherInstance = null;

module.exports = function autoCardTocPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-auto-card-toc',

    async loadContent() {
      // Keep all cards synchronized on initial start or build
      updateAllIndexes();

      // In dev mode (docusaurus start), launch the live watcher if not already running
      if (process.env.NODE_ENV !== 'production' && !watcherInstance) {
        watcherInstance = startWatcher();
      }

      return null;
    },
  };
};
