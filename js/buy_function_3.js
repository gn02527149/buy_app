$(function(){
	var buy_arr = [
	  {
	    name: "red",
	    info: "haif hieas hldfh dslx wewwe wefef",
	    text_num: 34,
	    width: 2
	  },
	  {
	    name: "yellow",
	    info: "haif hi eash ldfhd slahfl hsai xioe wif",
	    text_num: 12,
	    width: 3
	  },
	  {
	    name: "blue",
	    info: "haif hi eas hl dfhd slah flhsa lih ffe",
	    text_num: 5,
	    width: 8
	  }
	];


	var curr_index = 1; // 0,1,2 : 1置中


	$('.product_link').on('click', doAnimation);

	function doAnimation() {
	  var new_index = $(this).data('id');       //抓取被點擊的元素id
	  if (new_index ===  curr_index) return;    //如果轉過就不用轉
	  /*轉盤*/
	  var target = new_index - 1;  //變成 -1,0,1
	  var deg = target * 20 * -1;   //*-1 是反轉旋轉方向
	  $(".product").css("transform","rotate("+ deg +"deg)");
	  
	  /*封面照片*/
	  // delta: -1 or 1 :大於1向右移動小於向左移動
	  var delta = new_index - curr_index;
	  //清除所有動畫
	  $('.bg_container').children().removeClass('resizeAni');
	  if (delta>0) {
	    //current加上 is-Show 才會往左邊移動出現
	    $('.bg_container').children().eq(new_index).addClass('is-Show');
	  } else {
	    //上一個往右移動才能讓current出現
	    $('.bg_container').children().eq(new_index).addClass('resizeAni');
	    $('.bg_container').children().eq(new_index+1).removeClass('is-Show');
	  };
	  curr_index = new_index;
	  
	  //設定點擊紅色
	  if(new_index === 0){
	    $(".btn_star").eq(3).removeClass("star_move");
	    $(".btn_star").eq(4).addClass("star_move");
	    change_move();
	    //設定點擊黃色
	  }else if(new_index === 1){
	    $(".btn_star").eq(3).removeClass("star_move");
	    $(".btn_star").eq(4).removeClass("star_move");
	    change_move();
	    //設定點擊藍色
	  }else if(new_index === 2){
	    $(".btn_star").eq(3).addClass("star_move");
	    $(".btn_star").eq(4).addClass("star_move");
	    change_move();
	  };
	  //資料變更位移
	  function change_move(){
	    $(".info").css("top","-76px");
	    $(".text_num").css("transform","translateY(-10px)");
	    $("._num").css("top","-40px");
	    setTimeout(function(){
	      $("._num").html(buy_arr[new_index].width).css("top","3px");
	      $(".text_num").html(buy_arr[new_index].text_num).css("transform","translateY(40px)");
	      $(".info").html(buy_arr[new_index].info).css("top","-15px");
	    },500);
	  };
	};

	//滑動使content變高
	$(".info_list").scroll(function() {
	  if($(".info_list").scrollTop() >= 10){
	    $(".product").css("top","-100px");
	    $(".product_content").css("top","370px");
	    $(".info_list").css("height","240px").css("top","315px");
	  };
	  if($(".info_list").scrollTop() >= 370 || $(".info_list").scrollTop() <= 10){
	    $(".product").css("top","-45px");
	    $(".product_content").css("top","420px");
	    $(".info_list").css("height","180px").css("top","285px");
	  };
	});


	//點擊購買加入數量
	var buy_i = 0
	$(".product_btn .buy").click(function(){
	  buy_i+=1
	  $(".action_bar .buy").html(buy_i);
	  $(".action_bar .buy").addClass("buy_add");
	});

	//購物車跳出的動態
	$(".action_bar .buy").click(function(){
	  $(".action_bar .buy").addClass("buy_btn_move");
	  $(".pay_btn").removeClass("pay_big");
	  setTimeout(function(){
	    $(".buy_info").addClass("buy_move");
	  },500);
	  setTimeout(function(){
	    $(".buy_info_list").css("display","block");
	  },1000);
	  setTimeout(function(){
	    $(".buy_info_list h2").css("left","50%");
	  },1050);
	  setTimeout(function(){
	    $(".buy_info_list ul").css("left","50%");
	  },1150);
	  setTimeout(function(){
	    $(".pay_btn").css("left","50%");
	  },1250);
	  setTimeout(function(){
	    $(".pay_btn").addClass("pay_big");
	    $(".action_bar .buy").removeClass("buy_btn_move");
	  },2000);
	});
	//關閉購物車
	$(".close_btn").click(function(){
	  $(".close_btn").addClass("btn_move");
	  setTimeout(function(){
	    $(".buy_info_list").css("display","none");
	    $(".buy_info").addClass("buy_remove").removeClass("buy_move");
	    $(".pay_btn").removeClass("pay_big").css("left","-500px");
	    $(".buy_info_list ul,.buy_info_list h2").css("left","-500px");
	    // $(".buy_info_list h2").css("left","-500px");
	    $(".close_btn").removeClass("btn_move");
	  },500);
	  setTimeout(function(){
	    $(".buy_info").removeClass("buy_remove");
	  },1500);
	});
});