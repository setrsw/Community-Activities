'use strict';
import { _url } from '../config/config.js';

(function() {
    var user=get_cookie("user");
    $("#user").val(user);
})();

$("#form").submit(function(e) {

    // 提交表单
    $.ajax({
        type: "POST",   
        url: _url + "/v1/chain/giveRight",
        crossDomain: true,
        data: $("#form").serialize() + '&token=' + get_cookie("token"),
        success: function(res) {
            if(res.msg === "success") {
                alert("授权成功");
            } else {
                alert("授权失败: " + res.data);
            }
        }
    });

    e.preventDefault();
    e.stopPropagation();
});