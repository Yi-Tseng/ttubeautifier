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
$('html > body').empty();
$('html > body').removeAttributes();
$('html > head').empty();

// add css(maybe not) and jquery
$('html > head').append('<link href="http://getbootstrap.com/dist/css/bootstrap.css" rel="stylesheet">');
$('html > head').append('<script src="http://code.jquery.com/jquery-1.10.2.min.js"></script>');
	
// add nav bar
$('html > body').append('<div class="navbar"><a class="navbar-brand" href="#">STUCIS</a><ul class="nav navbar-nav"><li class="active"><a href="http://www.ttu.edu.tw">大同首頁</a></li><li><a href="http://stucis.ttu.edu.tw/newstud.php">查詢新生學號</a></li></ul></div>');

// add login and info pane
$('html > body').append('<div class="row-fluid"><div class="col-lg-4"><div class="well" id="login_well"></div></div><div class="col-lg-8"><div class="well" id="info_well"></div></div></div>');

$('#login_well').append('<form role="form" action="login.php" method="POST" name="loginform"><fieldset><legend>登入</legend><div class="form-group"><label for="sid">學號</label><input name="ID" type="text" class="form-control" id="sid" placeholder="學號"></div><div class="form-group"><label for="pwd">Password</label><input name="PWD" type="password" class="form-control" id="pwd" placeholder="密碼"></div><input type="submit" value="登入系統" class="btn btn-default" name="Submit" /></fieldset></form>');
$('#info_well').append('<img src="images/N2_banner.jpg" border="0" alt="北二區區域教學中心"><table width="100%" border="0"><tbody><tr><td><b>本校承接<a href="http://juang.bst.ntu.edu.tw/N2/" target="_blank">北二區區域教學中心</a>主題式合作計畫，以學生學習為本位並力求增進其競爭力為目標，透過精進教師教學品質和落實學生學習成效的核心路徑，規劃系列性之方案與活動。在具體實施策略涵蓋了精進教師教學知能精進、課程革新與學習資源擴增、自主學習能力培植與輔導等合作主題。</b></td></tr><tr><td><hr></td></tr><tr><td><br><b><a href="http://juang.bst.ntu.edu.tw/N2/" target="_blank">精進教與學品質‧全面提升學生競爭力</a></b><ol><li> 從教師教學知能精進的面向，透過辦理涵蓋一般教師和新進教師之各類教學知能研習活動，增進教師對於教師教學知能與學生學習特性的認識；並且著手發展以系所專業本位為導向的教學知能策進小組機制，促進教師對於自身教學精進的參與和投入。 </li><li> 從課程革新面向，積極增進通識課程與教學品質、落實教學助理工作流程與績效考評，以厚植教學助理培訓/評鑑制度，並且建立學生from education to career的學生學習歷程資料庫整合平台，提供師生持續檢視學習經驗與成效的平台和機制。 </li><li> 學習資源的增進面向，導入北二區基地營相關資源與平台機制，並且建立鼓勵教師將教學內容製成數位教材並分享的獎勵機制，以營造師生主動參與課程與教學之網路平台的運用，並將能有益於深化與中心學校及周邊夥伴學校之間資源共享。 </li><li> 從學習資源擴增面向，積極建置特色學習情境，如日本文化體驗教室、亞當史密斯廳、造物夢工場、專業技能體驗營、International Cafe Night與異國文化體驗活動及留學心得分享座談等，並且落實專業本位的職場實習制度，以提供學生多元且豐富的實作和體驗之學習機會。</li><li> 從學生自主學習能力的培植與輔導面向，全面活化學生社團彰權賦能的經驗與機制，採取多元、適性的理念，提振學生學習熱情和志趣，並且積極推動在地體驗與關懷學習圈，以發揮輔導與培植的功能，增進學生自主學習的終身能力。</li></ol></td></tr></tbody></table>');




