var editor = "";
$(function(){
  
  var selectCode = $("#select_code");
  if(codeData.length !== 0){
    console.log(codeData)
    var codeHtml = "";
    codeData.forEach(function(item,index){
      codeHtml += "<option value="+index+">"+item.title+"</option>"
    });
    selectCode.html(codeHtml)
  }
 

  getSelectVal();
  getCode()
})
function getSelectVal () {
  if($("#select_code option:selected")){
    var valCode = $("#select_code option:selected").val()
    var codeHtml = 
`<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='ie=edge'>
    <title>${codeData[valCode].title}</title>
    <style>
      ${codeData[valCode].style}
    </style>
    <script src="https://lib.baomitu.com/jquery/3.4.1/jquery.js" type="text/javascript"></script>
  </head>
  <body id="bodyCont">
    ${codeData[valCode].html}
    <script>
      ${codeData[valCode].javascript}
    </script>
  </body>
</html>`;
    $("#code").val(codeHtml)
  }
}

function getCode () {
    editor = CodeMirror.fromTextArea(document.getElementById("code"), {
    lineNumbers: true,//是否在编辑器左侧显示行号
    // mode: "text/x-javascriptsrc",    //javascript
    // mode: "text/html",
    matchBrackets: true,      // 括号匹配
    styleActiveLine: true, // 当前行背景高亮
    matchBrackets: true,
    smartIndent: true,        //自动缩进，设置是否根据上下文自动缩进（和上一行相同的缩进量）。默认为true。
  });
  editor.setSize('auto','100%');
  editor.setOption("theme", "darcula");  // 编辑器主题
  // editor.onUpdate = function(){
  //   alwert(2)
  // } 
  // 改变
  editor.on("change", function(cm, change) {
    // console.log(cm);
    // console.log(change);
    // console.log(editor.getValue()); //获取值

  });
}
function onPreview () {

  //console.log(editor.toTextArea());
  // console.log(editor.getValue());
  // console.log(editor.getTextArea().value);
  var code = editor.getValue(),  //获取代码字符串
      $preview = $('.js-preview'), 
      blob = new Blob([code], {  //注意一定要写type
          'type': 'text/html'
      }),
      url = URL.createObjectURL(blob), //生成url
      $iframe = $('<iframe src="' + url + '"></iframe>');
      console.log($iframe)
  $preview.html('').append($iframe);
}