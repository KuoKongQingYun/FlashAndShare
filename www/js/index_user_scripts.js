(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  咔嚓 */
    $(document).on("click", ".uib_w_2", function(evt)
    {
        intel.xdk.camera.takePicture(80,false,"jpg");
        /* your code goes here */ 
    });
    
        /* button  复制到剪切板 */
    $(document).on("click", ".uib_w_6", function(evt)
    {
        intel.xdk.device.copyToClipboard($("#URL").html());
        alert("已复制到剪切板");
        /* your code goes here */ 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
