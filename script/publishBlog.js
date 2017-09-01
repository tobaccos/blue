/**
 * Created by Administrator on 2016-07-27.
 */
$(function() {
    //这里是富文本框里面的内容接口
    $("#publicBlog").on("click",function(){
        var articalData=encodeURI($("#Editor_Editor").html());
        $.ajax({
            url:"http://www.yuan.com/text.php",
            type:"POST",
            dataType:"json",
            data:{
                sendData:articalData
            },
            success:function(data){
                console.log(data);
            },
            error:function(error){
                console.log(error);
            }
        });
    });

//    移除不需要的富文本框功能,可根据需要删减 start
    $(".btn").each(function(index){
        switch($(this).attr("title")){
            case "Fonts":
                $(this).remove();
                break;
            case "Paragraph Format":
                $(this).remove();
                break;
            case "Underline":
                $(this).remove();
                break;
            case "Text/Background Color":
                $(this).remove();
                break;
            case "Increase Indent":
                $(this).remove();
                break;
            case "Decrease Indent":
                $(this).remove();
                break;
            case "Insert/Remove Numbered List":
                $(this).remove();
                break;
            case "Insert/Remove Bulleted List":
                $(this).remove();
                break;
            case "Undo":
                $(this).remove();
                break;
            case "Redo":
                $(this).remove();
                break;
            case "Insert Table":
                $(this).remove();
                break;
            case "Strike Through":
                $(this).remove();
                break;
            case "Insert Special Character":
                $(this).remove();
                break;
            case "Print":
                $(this).remove();
                break;
            case "Select All":
                $(this).remove();
                break;
            case "Source":
                $(this).remove();
                break;
            case "Toggle Screen":
                $(this).remove();
                break;
        }
    });

    //上传音乐按钮的模拟点击  start
    $(".upload-music i").on("click",function(){
        $(".input-of-btn").trigger("click");
    });

    $(".input-of-btn").on("change",function(){
        var fileName = $(".input-of-btn").val().substring(12);
        $(".music-name").html(fileName).val();
    });
    //上传音乐按钮的模拟点击  end

    $(".cate").on("click",function(){
        $(".cate-nav").slideToggle(300);
    });
    var width=$(window).width();
    $("#Editor_Editor").height(width/2);
    $("#introduce_music").height(width/2);
});


