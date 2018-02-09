(function (global) {
    var app = global.app = global.app || {};

    app.makeUrlAbsolute = function (url) {
            var anchorEl = document.createElement("a");
            anchorEl.href = url;
            return anchorEl.href;
        };

    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();

        app.changeSkin = function (e) {
            var mobileSkin = "";

            if (e.sender.element.text() === "Flat") {
                e.sender.element.text("Native");
                mobileSkin = "flat";
            } else {
                e.sender.element.text("Flat");
                mobileSkin = "";
            }

            app.application.skin(mobileSkin);
        };

        app.application = new kendo.mobile.Application(document.body, { layout: "tabstrip-layout" });
    }, false);
})(window);


$(document).ready(function() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {      
     $('#scan').click( function() 
        {
          cordova.plugins.barcodeScanner.scan(
          function (result) {
              alert("We got a barcode\n" +
                    "Result: " + result.text + "\n" +
                    "Format: " + result.format + "\n" +
                    "Cancelled: " + result.cancelled);            
          }, 
          function (error) {
              alert("Scanning failed: " + error);
          });
        }
     );
}
function hasCameraPermission() {
    cordova.plugins.barcodeScanner.hasCameraPermission(
      function(result) {
        // if this is 'false' you probably want to call 'requestCameraPermission' now
        alert(result);
      }
    )
  }

  function requestCameraPermission() {
    // no callbacks required as this opens a popup which returns async
    cordova.plugins.barcodeScanner.requestCameraPermission();
  }