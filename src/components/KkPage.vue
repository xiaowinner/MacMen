<template>
  <div id="kkpager"></div>

</template>
<script>
  import $ from 'jquery'
  import kkpager from '../js/kkpager'

  function getParameter(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  }

  //init
  /*$(function() {
   var totalPage = 20;
   var totalRecords = 390;
   var pageNo = getParameter('pno');
   if (!pageNo) {
   pageNo = 1;
   }
   //生成分页
   //有些参数是可选的，比如lang，若不传有默认值
   kkpager.generPageHtml({
   pno: pageNo,
   //总页码
   total: totalPage,
   //总数据条数
   totalRecords: totalRecords,
   //链接前部
   hrefFormer: '',
   //链接尾部
   hrefLatter: '',
   getLink: function(n) {
   return this.hrefFormer + this.hrefLatter + "?pno=" + n;
   },
   lang: {
   firstPageText: '首页',
   firstPageTipText: '首页',
   lastPageText: '尾页',
   lastPageTipText: '尾页',
   prePageText: '上一页',
   prePageTipText: '上一页',
   nextPageText: '下一页',
   nextPageTipText: '下一页',
   totalPageBeforeText: '共',
   totalPageAfterText: '页',
   currPageBeforeText: '当前第',
   currPageAfterText: '页',
   totalInfoSplitStr: '/',
   totalRecordsBeforeText: '共',
   totalRecordsAfterText: '条数据',
   gopageBeforeText: '&nbsp;转到',
   gopageButtonOkText: '确定',
   gopageAfterText: '页',
   buttonTipBeforeText: '第',
   buttonTipAfterText: '页'
   },
   isGoPage: false,
   isWrapedPageBtns: false,
   isShowTotalRecords: false,
   isShowTotalPage: false,
   isShowCurrPage: false
   //,
   //mode : 'click',//默认值是link，可选link或者click
   //click : function(n){
   //	this.selectPage(n);
   //  return false;
   //}
   });
   });*/
  var pages = function () {
    var totalPage = 20;
    var totalRecords = 390;
    var pageNo = getParameter('pno');
    if (!pageNo) {
      pageNo = 1;
    }
    //生成分页
    //有些参数是可选的，比如lang，若不传有默认值
    kkpager.generPageHtml({
      pno: pageNo,
      //总页码
      total: totalPage,
      //总数据条数
      totalRecords: totalRecords,
      //链接前部
      hrefFormer: '',
      //链接尾部
      hrefLatter: '',
      getLink: function (n) {
        return this.hrefFormer + this.hrefLatter + "?pno=" + n;
      },
      lang: {
        firstPageText: '首页',
        firstPageTipText: '首页',
        lastPageText: '尾页',
        lastPageTipText: '尾页',
        prePageText: '上一页',
        prePageTipText: '上一页',
        nextPageText: '下一页',
        nextPageTipText: '下一页',
        totalPageBeforeText: '共',
        totalPageAfterText: '页',
        currPageBeforeText: '当前第',
        currPageAfterText: '页',
        totalInfoSplitStr: '/',
        totalRecordsBeforeText: '共',
        totalRecordsAfterText: '条数据',
        gopageBeforeText: '&nbsp;转到',
        gopageButtonOkText: '确定',
        gopageAfterText: '页',
        buttonTipBeforeText: '第',
        buttonTipAfterText: '页'
      },
      isGoPage: false,
      isWrapedPageBtns: false,
      isShowTotalRecords: false,
      isShowTotalPage: false,
      isShowCurrPage: false
      //,
      //mode : 'click',//默认值是link，可选link或者click
      //click : function(n){
      //	this.selectPage(n);
      //  return false;
      //}
    });
  };


  export default {

    created: function () {
      $(pages);
    },
    mounted: function () {
      $(pages);
    },
    methods: {

    }
  }
</script>
<style lang="sass" scoped>
  @import "../css/kkpager_blue.css";
</style>
