/*TMODJS:{"version":2,"md5":"a6e63059dfc3802f5e54ed9544ec28f6"}*/
template('index',function($data,$id) {
var $helpers=this,include=function(id,data){data=data||$data;var $text=$helpers.$include(id,data,$id);$out+=$text;return $text;},$out='';$out+=' ';
include('./public/header');
$out+='  <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">  <ol class="carousel-indicators"> <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li> <li data-target="#carousel-example-generic" data-slide-to="1"></li> </ol>  <div class="carousel-inner"> <div class="item active"> <img src="./images/sunset.jpg" alt="sunset"> <div class="carousel-caption"></div> </div> <div class="item"> <img src="./images/wood.jpg" alt="wood"> <div class="carousel-caption"></div> </div> </div>  <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev"> <span class="glyphicon glyphicon-chevron-left"></span> </a> <a class="right carousel-control" href="#carousel-example-generic" data-slide="next"> <span class="glyphicon glyphicon-chevron-right"></span> </a> </div>  <div class="container"> <div class="row"> <div class="col-sm-3"> <img data-src="holder.js/180x180/gray" class="img-circle" alt="140x140" /> </div> <div class="col-sm-3"> <img data-src="holder.js/180x180/gray" class="img-circle" alt="140x140" /> </div> <div class="col-sm-3"> <img data-src="holder.js/180x180/gray" class="img-circle" alt="140x140" /> </div> <div class="col-sm-3"> <img data-src="holder.js/180x180/gray" class="img-circle" alt="140x140" /> </div> </div>  ';
include('./public/footer');
$out+=' </div>';
return new String($out);
});