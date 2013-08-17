// remove all attribute method
jQuery.fn.removeAttributes = function() {
  return this.each(function() {
    var attributes = $.map(this.attributes, function(item) {
      return item.name;
    });
    var img = $(this);
    $.each(attributes, function(i, item) {
    img.removeAttr(item);
    });
  });
}

// clear all stuff...
// $('html > body').empty();
$('html > body').removeAttributes();
$('html > head').empty();

// remove unuse stuff
$('#logo').remove();

// add css(maybe not) and jquery
var bs_css = document.createElement('link');
bs_css.href = 'http://getbootstrap.com/dist/css/bootstrap.css';
bs_css.rel = 'stylesheet';
$('html > head').append(bs_css);

// jquery
var jq_script = document.createElement('script');
jq_script.src = 'http://code.jquery.com/jquery-1.10.2.min.js';
$('html > head').append(jq_script);

// botstrap js
// var bs_script = document.createElement('script');
// bs_script.src = 'http://getbootstrap.com/dist/js/bootstrap.js';
// $('html > head').append(bs_script);

var menu_obj = [
  {name:'教務', items:[
    {name:'註冊組', link:'th'}, 
    {name:'各科成績', link:'../academic/listscore.php'}, 
    {name:'期中預警', link:'../academic/midwarning.php'}, 
    {name:'期末成績', link:'../academic/finalscore.php'}, 
    {name:'歷年成績', link:'../academic/accscore.php'}, 
    {name:'修課審核', link:'../academic/gradechklist.php'}, 
    {name:'學籍資料', link:'../staffair/sturecord.php'}, 
    {name:'註冊狀況', link:'../academic/regstatus.php'}, 
    {name:'抵免修申請', link:'../registra/submain.php'}, 
    {name:'學生證件申請', link:'../academic/trans_index.php'}, 
    {name:'畢業離校系統', link:'../graduverify/graduxfer.php'}, 
    {name:'課務組', link:'th'}, 
    {name:'大考座位表', link:'../academic/examseat.php'}, 
    {name:'教學評量', link:'../academic/evaplan.htm'}, 
    {name:'導師輔導評量', link:'../cc/sysxfer.php?Task=EvaTch'}, 
    {name:'本學期功課表', link:'../academic/schedule.php'}, 
    {name:'學程資訊', link:'../academic/trackstatus.php'}, 
    {name:'課程地圖', link:'../academic/sbjmap.php'}, 
    {name:'教學組', link:'th'}, 
    {name:'英文檢定成績', link:'../etest/engtest.php'}, 
    {name:'意見調查', link:'th'}, 
    {name:'選課意見調查', link:'../selclaopin/opinion.php'}, 
  ]},
  {name:'學務', items:[
    {name:'出缺勤資訊', link:'th'}, 
    {name:'出缺勤統計', link:'../staffair/absrecord.php'}, 
    {name:'請假申請', link:'http://stucis.ttu.edu.tw/absence/'}, 
    {name:'獎學金資料', link:'th'}, 
    {name:'查詢獎學金', link:'http://activity.ttu.edu.tw/files/11-1041-671.php'}, 
    {name:'弱勢學生助學', link:'th'},
    {name:'線上申請', link:'/coloan/coloanxfer.php'}, 
    {name:'個人資料維護', link:'th'}, 
    {name:'個人資料登錄', link:'../staffair/dataentry.php'}, 
    {name:'學習歷程檔案', link:'../staffair/portfolio.php'}, 
    {name:'自主健康管理', link:'../staffair/healthstatus.php'}, 
    {name:'學生宿舍', link:'th'}, 
    {name:'宿舍管理系統', link:'../staffair/dormgmxfer.php'}, 
    {name:'住宿申請', link:'../dormapply/applyxfer.php'}, 
  ]},
  {name:'總務', items:[
    {name:'學雜費資訊', link:'th'}, 
    {name:'學雜費資訊', link:'http://stucis.ttu.edu.tw/general/tuition.php'}, 
    {name:'停車申請系統', link:'th'}, 
    {name:'停車申請系統', link:'http://stucis.ttu.edu.tw/parkingmanage/showmsg.php'}, 
  ]},
  {name:'圖書館', items:[
    {name:'圖書館讀者服務', link:'th'}, 
    {name:'電子資源查詢', link:'http://leris.library.ttu.edu.tw/leris/index.htm'}, 
    {name:'本校碩博士論文', link:'http://library.ttu.edu.tw/files/11-1015-910.php'}, 
    {name:'圖書介購', link:'http://work.library.ttu.edu.tw/BookOrder/Default.html'}, 
    {name:'圖書協尋', link:'http://work.library.ttu.edu.tw/search/Default.html'}, 
    {name:'讀者意見調查', link:'th'}, 
    {name:'電子資料庫問卷', link:'http://leris.library.ttu.edu.tw/leris/user/edj/edb_qnaire.php'}, 
    {name:'讀者滿意度調查', link:'http://library.ttu.edu.tw/files/15-1015-6536,c658-1.php'}, 
  ]}, 
  
  {name:'電算', items:[
    {name:'校務資訊', link:'th'}, 
    {name:'個人照片上傳', link:'../photo/doupload.php'}, 
    {name:'個人訊息中心', link:'../bulletin/bulletinxfer.php'}, 
    {name:'網路大學', link:'../academic/elearn.php'}, 
    {name:'報修系統', link:'../repair/requestview.php'}, 
    {name:'意見反應網', link:'../Sugboard/transinfo.php?ident=S'}, 
    {name:'網路服務', link:'th'}, 
    {name:'無線網路帳號', link:'../cc/wlanpwd.php'}, 
    {name:'網路硬碟(一)', link:'../cc/webhd.php'}, 
    {name:'網路硬碟(二)', link:'../cc/webhd2.php'}, 
    {name:'個人網頁管理', link:'../cc/webpwd.php'}, 
    {name:'Proxy認證申請', link:'../cc/proxypwd.php'}, 
    {name:'宿網IP申請', link:'../cc/dormnetxfer.php'}, 
    {name:'系統資訊', link:'th'}, 
    {name:'變更密碼', link:'../admin/chgpwd.php'}, 
    {name:'登入紀錄', link:'../cc/lastlogin.php'}, 
    {name:'行事曆及公告', link:'http://eboard.ttu.edu.tw/showpost/stucis.html'}, 
    {name:'問卷與投票', link:'th'}, 
    {name:'問卷調查', link:'../questionnaire/maintitle.php'}, 
    {name:'投票系統', link:'../stuvote/usermain.php'}, 
  ]},
  {name:'選課', items:[
    {name:'選課處理', link:'th'}, 
    {name:'各班課程', link:'../selcourse/ListClassCourse.php'}, 
    {name:'全校教師課程', link:'../selcourse/ListTeacher.php'}, 
    {name:'共同科目', link:'../selcourse/ListUGRR.php'}, 
    {name:'通識課程', link:'../selcourse/ListGeneral.php'}, 
    {name:'時段課程', link:'../selcourse/ListTime.php'}, 
    {name:'快速選課', link:'../selcourse/FastSelect.php'}, 
    {name:'已選課程', link:'th'}, 
    {name:'列印已選課程', link:'../selcourse/ListSelected.php'}, 
    {name:'選課表', link:'../selcourse/ListCourseSheet.php'}, 
    {name:'本人工課表', link:'../selcourse/Schedule.php'}, 
    {name:'課程查詢', link:'th'}, 
    {name:'班級供課表', link:'../selcourse/ViewClass.php'}, 
    {name:'教師授課表', link:'../selcourse/ViewTeacher.php'}, 
    {name:'通識課時間表', link:'../selcourse/ViewGeneral.php'}, 
    {name:'教室使用狀況', link:'../selcourse/ViewRoom.php'}, 
    {name:'系統資訊', link:'#'}, 
    {name:'使用說明', link:'../help/selhelp.htm'}, 
    {name:'選課記錄', link:'../selcourse/SelRecord.php'}, 
  ]},
  {name:'暑休選課', items:[
    {name:'共同科目', link:'SummerSel.php?Inst=0'}, 
    {name:'工程學院', link:'SummerSel.php?Inst=1'}, 
    {name:'電資學院', link:'SummerSel.php?Inst=2'}, 
    {name:'經營學院', link:'SummerSel.php?Inst=3'}, 
    {name:'設計學院', link:'SummerSel.php?Inst=4'}, 
    {name:'已選課程', link:'ListSelected.php'}, 
    {name:'功課表', link:'Schedule.php'}, 
    {name:'學分費資訊', link:'ListFee.php'}, 
    {name:'繳費方式說明', link:'atmxfer.htm'}, 
  ]},
  {name:'自治會', items:[
    {name:'學生自治會', link:'th'}, 
    {name:'自治會公告', link:'http://eboard.ttu.edu.tw/showpost/showdeppost.php?unit=A1211'}, 
    {name:'社團活動申請', link:'../staffair/sub_xfer.php'}, 
  ]}
];

// create navgate bar
var navbar = document.createElement('div');
navbar.setAttribute('class', 'navbar');
$('html > body').prepend(navbar);

// create navbar brand
var navbar_brand = document.createElement('a');
navbar_brand.setAttribute('class', 'navbar-brand');
navbar_brand.href = '#';
navbar_brand.appendChild(document.createTextNode( "STUCIS" ));
navbar.appendChild(navbar_brand);

// create navbar menu
var navbar_nav = document.createElement('ul');
navbar_nav.setAttribute('class', 'nav navbar-nav');

// add menu items
for(var k in menu_obj){
  var menu_item = menu_obj[k];
  var i = document.createElement('li');
  i.setAttribute('class', 'dropdown');

  var a = document.createElement('a');
  a.setAttribute('class', 'dropdown-toggle');
  a.setAttribute('data-toggle', 'dropdown');
  a.appendChild(document.createTextNode(menu_item.name));
  var b = document.createElement('b');
  b.setAttribute('class', 'caret');
  a.appendChild(b);
  i.appendChild(a);
  navbar_nav.appendChild(i);

  var dmenu = document.createElement('ul');
  dmenu.setAttribute('class', 'dropdown-menu');
  for(var ii in menu_item.items){
    var ii_li = menu_item.items[ii];
    var ii_li_it = document.createElement('li');
    
    if(ii_li.link === 'th'){
      ii_li_it.setAttribute('class', 'dropdown-header');
      ii_li_it.appendChild(document.createTextNode(ii_li.name));

      // console.log(ii);
      if(ii != 0){

        var divider = document.createElement('li');
        divider.setAttribute('class', 'divider');
        dmenu.appendChild(divider);
      }
    } else {
      var ii_li_a = document.createElement('a');
      ii_li_a.setAttribute('href', ii_li.link);
      ii_li_a.appendChild(document.createTextNode(ii_li.name));
      ii_li_it.appendChild(ii_li_a);
    }
    dmenu.appendChild(ii_li_it);
    
  }
  i.appendChild(dmenu);
}

navbar.appendChild(navbar_nav);


// $('html > body').prepend('<ul class="dropdown-menu"><li><a href="#">Action</a></li><li><a href="#">Another action</a></li><li><a href="#">Something else here</a></li><li class="divider"></li><li class="dropdown-header">Dropdown header</li><li><a href="#">Separated link</a></li><li><a href="#">One more separated link</a></li></ul></li><li class="dropdown"><a>學務<b class="caret"></b></a></li>        <li><a>總務<b class="caret"></b></a></li><li><a>圖書館<b class="caret"></b></a></li><li><a>電算<b class="caret"></b></a></li><li><a>選課<b class="caret"></b></a></li>        <li><a>暑休選課<b class="caret"></b></a></li><li><a>自治會<b class="caret"></b></a></li><li><a>登出</a></li></ul></div>');

// set table class
$('table').removeClass('listtab');
$('table').addClass('table');










