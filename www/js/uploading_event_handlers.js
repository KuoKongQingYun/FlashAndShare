(function() {
    "use strict";
    function updateUploadProgress(bytesSent, totalBytes) {
        if (totalBytes > 0) currentProgress = (bytesSent / totalBytes) * 100;
        document.getElementById("progress").innerHTML = currentProgress + "%";
    }
    
    function uploadBusy(evt) {
        alert("Sorry, a file is already being uploaded");
    }

    function uploadComplete(evt) {
        alert("123");
        if (evt.success === true) {
            alert("File " + evt.localURL + " was uploaded");
            $("#URL").html(evt.localURL);
        } else {
            alert("Error uploading file " + evt.message);
        }
    }

    function uploadCancelled(evt) {
        alert("File upload was cancelled " + evt.localURL);
    }
    document.addEventListener("intel.xdk.file.upload.busy", uploadBusy);
    document.addEventListener("intel.xdk.file.upload", uploadComplete);
    document.addEventListener("intel.xdk.file.upload.cancel", uploadCancelled);
})();