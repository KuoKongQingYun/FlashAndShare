(function() {
    "use strict";
    function onTakingPhoto(event) {
        if (event.success === true) {
            var imagesrc = intel.xdk.camera.getPictureURL(event.filename);
            $("#photo").attr("src", imagesrc);
            
            
            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = imagesrc.substr(fileURL.lastIndexOf('/') + 1);
            options.mimeType = "image/jpeg";
            var ft = new FileTransfer();
            ft.upload(imagesrc,encodeURI("http://flashandshare.linzhihao.cn/index.php"), upload_success, upload_fail, options);
            //intel.xdk.file.uploadToServer(imagesrc,"http://flashandshare.linzhihao.cn/uploadImage.php", "", "image/jpeg", "updateUploadProgress");
            //xmlHttpRequest = createXmlHttpRequest();
        } else {
            if (event.message !== undefined) {
                alert(event.message);
            } else {
                //alert("意外错误！");
            }
        }
    }
    document.addEventListener("intel.xdk.camera.picture.add", onTakingPhoto);
    document.addEventListener("intel.xdk.camera.picture.busy", onTakingPhoto);
    document.addEventListener("intel.xdk.camera.picture.cancel", onTakingPhoto);
})();