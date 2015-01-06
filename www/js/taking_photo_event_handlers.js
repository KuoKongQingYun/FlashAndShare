(function() {
    "use strict";
    function upload_success(r) {
        $("#URL").html(r.response);
    }
    function upload_fail(error) {
        alert("An error has occurred: Code = " + error.code);
    }
    
    function onTakingPhoto(event) {
        if (event.success === true) {
            var imagesrc = intel.xdk.camera.getPictureURL(event.filename);
            $("#photo").attr("src", imagesrc);

            var options = new FileUploadOptions();
            options.fileKey = "file";
            options.fileName = imagesrc.substr(imagesrc.lastIndexOf('/') + 1);
            options.mimeType = "image/jpeg";
            
            try {
                var ft = new FileTransfer();
            } catch(e) {
                alert(e.message);
            }
            ft.upload(imagesrc, encodeURI("http://flashandshare.linzhihao.cn/index.php"), upload_success, upload_fail, options);
            
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