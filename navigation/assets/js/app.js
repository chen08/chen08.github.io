$(function(){
  // alert(1)
  $(".menu-ul").first().show();
  var oNavBtn = $(".nav-btn")
  var navItem = $("#navItem")
  var leftBar = $("#leftBar")
  var oMain = $(".container .main")
  ;
  var mainContent = $("#mainContent");
  var navHtmlArr = [];
  var menuDataArr = [];
  var menuHtmlArr = [];
  //读取json方法,遍历数据
  $.getJSON("assets/mock/data.json", function(data) {
    // dataArr=data;
    console.log(data)
    // console.log(dataArr)
    getData(data)
  　//each循环 使用$.each方法遍历返回的数据date
    // $.each(data, function(i, item) {
    //   console.log(item)
    //     console.log(item.name+","+item.sex+","+item.age);
    // })
  });
  var navHtml = "";
  function getData(data) { 
    console.log(data)

    if(data.length !== "0"){
      data.forEach(function(item ,index){
        // console.log(item)
        if(item.children.length !== "0"){
          var sitesHtml = "";
          item.children.forEach(function (i,v) {
            var anchorVal = i.anchor +v;
            i.id = anchorVal;
            menuDataArr.push(i)
            sitesHtml += '<li class="menu-item"><a href="#'+i.classify+'">'+
            '<i class="'+i.icon+'" aria-hidden="true"></i><span class="menu-item-span">'+i.classify+'</span>'+             
            '</a></li>';
          })              
        }
        navHtml += '<li><div class="nav-btn">'+      
                      '<i class="'+item.icon+'" aria-hidden="true"></i><span>'+item.title+'</span>'+
                    '<i class="icon czs-angle-down-l" aria-hidden="true"></i></div><ul class="menu-ul" >'+sitesHtml+'</ul>'+
                    '</li>';
      });
      navItem.html(navHtml)

      // console.log(menuDataArr)
    }
    //加载网址
    getWebsite(menuDataArr)
  }
  function getWebsite(data) {  
    // console.log(data);
    var menuHtml = "";
    if(data.length !== "0"){
      data.forEach(function(item,index){
        var sitesHtml = "";
        if(item.sites.length !== "0"){
          item.sites.forEach(function(i,v){
            // console.log(i)
            sitesHtml += '<a target="_blank" href="'+i.href+'"><div class="item">'+
            '<div class="no-logo">'+i.name+'</div>'+
            '<div class="desc">'+i.desc+'</div></div></a>';
          })
        }
        // console.log(sitesHtml)
        menuHtml += '<div class="box"><a href="#" name="'+item.classify+'"></a>'+
                    '<div class="sub-category"><div><i class="iconfont icon-xuexi1"></i>'+item.classify+'</div></div><div>'+
                    sitesHtml+
                '</div></div>';

      })
      mainContent.html(menuHtml);
    }
  }

  $(document).on('click', '.nav-btn', function(event) {
    var _this = $(this)
    // console.log(_this)
    var oUl= _this.parent().find(".menu-ul");
    oUl.stop(true).fadeToggle();
  });
  

  $(".nav-reorder").click(function(){
    var _this = $(this);
    if(_this.hasClass("active")){
      _this.removeClass("active")
      // leftBar.animate({left:'-200px'});
      oMain.animate({'margin-left':'0px'});
    }else{
      oMain.animate({'margin-left':'200px'});
      // leftBar.animate({left:'0px'});
      _this.addClass("active")
    }
  });
  


























  

})