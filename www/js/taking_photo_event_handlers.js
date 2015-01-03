(function() {
    "use strict";
    function onTakingPhoto(event) {
        if (event.success === true) {
            var imagesrc = intel.xdk.camera.getPictureURL(event.filename);
            $("#photo").attr("src", imagesrc);
            intel.xdk.file.uploadToServer(imagesrc, "http://flashandshare.linzhihao.cn/uploadImage.php", "", "image/jpeg", "updateUploadProgress");
            alert("");
            xmlHttpRequest = createXmlHttpRequest();
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