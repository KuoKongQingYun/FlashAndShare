(function() {
    "use strict";
    function register_event_handlers() {

        /* button  咔嚓 */
        $(document).on("click", ".uib_w_2",
        function(evt) {
            intel.xdk.camera.takePicture(80, true, "jpg");
        });

    }
    document.addEventListener("app.Ready", register_event_handlers, false);
})();