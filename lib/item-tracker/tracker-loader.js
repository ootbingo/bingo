const storageItem = window.localStorage.getItem('tracker')

if (storageItem) {
  window.trackerOptions = JSON.parse(storageItem);
  if (window.trackerOptions.enabled) {
    const loadScript = filename => {
      const script = document.createElement('script');
      script.src = filename;
      document.body.appendChild(script);
      return new Promise(res => script.onload = () => res());
    };

    const style = document.createElement('style');
    style.href = './lib/item-tracker/tracker.css'
    document.head.appendChild(style);

    Promise.all([
      loadScript('./lib/item-tracker/tracker-data.js'),
      loadScript('./lib/item-tracker/tracker-default.js')
    ]).then(() => loadScript('./lib/item-tracker/item-tracker.js'));
  }
}
