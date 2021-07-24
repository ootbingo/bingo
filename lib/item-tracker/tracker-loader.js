const storageItem = window.localStorage.getItem('tracker') || null;
window.trackerOptions = JSON.parse(storageItem) || {
  enabled: true,
  total: false,
  settings: {},
};

if (window.trackerOptions.enabled) {
  const loadScript = filename => {
    const script = document.createElement('script');
    script.src = filename;
    document.body.appendChild(script);
    return new Promise(res => script.onload = () => res());
  };

  const loadCSS = filename => {
    const style = document.createElement('link');
    style.rel = 'stylesheet';
    style.href = filename;
    document.head.appendChild(style);
    return new Promise(res => style.onload = () => res());
  }


  Promise.all([
    loadScript('./lib/item-tracker/tracker-data.js'),
    loadScript('./lib/item-tracker/tracker-default.js'),
    loadCSS('./lib/item-tracker/item-tracker.css'),
  ]).then(() => loadScript('./lib/item-tracker/item-tracker.js'));
}
