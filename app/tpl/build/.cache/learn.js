/*TMODJS:{"version":2,"md5":"e77c24b5f3914854cce2ec373ed4c80b"}*/
template('learn',function($data,$id) {
var $helpers=this,include=function(id,data){data=data||$data;var $text=$helpers.$include(id,data,$id);$out+=$text;return $text;},$out='';$out+=' ';
include('./public/header');
$out+='  <div class="jumbotron learn-jumbotron"> <h1>你想要了解的知识</h1> <p>...</p> <p><a class="btn btn-primary btn-lg" role="button">Learn more</a></p> </div>  <div class="container"> <div class="row"> <div class="col-sm-3">  <ul class="nav nav-pills nav-stacked"> <li class="active"><a href="#aaa" data-toggle="tab">相关知识1</a></li> <li><a href="#bbb" data-toggle="tab">相关2</a></li> <li><a href="#ccc" data-toggle="tab">相关3</a></li> </ul> </div> <div class="col-sm-9">  <div class="tab-content"> <div class="tab-pane fade in active" id="aaa"> <ol class="breadcrumb"> <li><a href="#">Home</a></li> <li class="active">Learn</li> </ol> 这里用滚动监听 </div> <div class="tab-pane fade" id="bbb">bbb content</div> <div class="tab-pane fade" id="ccc">ccc content</div> </div> </div> </div>  ';
include('./public/footer');
$out+=' </div>';
return new String($out);
});