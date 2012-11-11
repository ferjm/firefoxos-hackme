
function installMe() {
  var req = navigator.mozApps.install(document.location.protocol + '//' +
                                      document.location.host + '//' +
                                      'firefoxos-hackme/manifest.webapp');
  req.onsuccess = function onsucess() {
    console.log('Yay! \o/');
  };

  req.onerror = function onerror(evt) {
    console.log('Oh crap! ' + evt.target.error.name);
  };
}

window.addEventListener('load', function init(evt) {
  document.getElementById('installApp').addEventListener('click', installMe);
});
