(function() {
  //为body中的具有.box-switcher类的标签绑定click和touchstart事件
  $('body').on('click touchstart', '.box-switcher', function(e) {
    //阻止调用默认方法
    e.preventDefault();
    //获取date-switch属性的值
    var box = $(this).attr('data-switch');
    //最近的.box类标签切换.active类属性
    $(this).closest('.box').toggleClass('active');
    //最近的.box类标签添加.active类属性
    $('#' + box).closest('.box').addClass('active');
  });
})();
