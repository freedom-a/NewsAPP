$(function(){
	/*绑定数据开始*/
	$qiehuan=$('.footer div');
	$qiehuan.each(function(i){
		$(this).data('index',lanmus[i].id);
	})
	/*绑定数据结束*/
	/*默认开始*/
	var dingshuju=content.filter(function(v,i){
		return content[i].catid==1;
	})
			var dingel=$('.slider').clone();
			dingel.css({'display':'block'});
			var dingcontent=$('.contentding').clone();
			dingcontent.css({'display':'block'});
			dingshuju.forEach(function(v,i){
				dingcontent.children('*:nth-child(1)').append('<li><div><img src="'+v.picture+'" alt=""></div><div>'+v.title+'</div></li>');
			})
			$('.body').append(dingel);
			$('.body').append(dingcontent);
			/*轮播图*/
			var $slides=$('.slides li');
			$slides.bind('swipeLeft',function(){
				var cur,next;
				cur=$(this);
				if(cur.next().length){
					next=cur.next();
				}else{
					next=$slides.first();
				}
				cur.removeClass('active').addClass('zuoce');
				next.addClass('active');
				setTimeout(function(){
					cur.removeClass('zuoce');
				},325);
			})
			$slides.bind('swipeRight',function(){
				var cur,next;
				cur=$(this);
				if(cur.prev().length){
					next=cur.prev();
				}else{
					next=$slides.last();
				}
				cur.removeClass('active');
				setTimeout(function(){
					next.css({transition:'none'}).addClass('zuoce');
				},0)
				setTimeout(function(){
					next.css({transition:'left .325s linear'}).addClass('active').removeClass('zuoce');;
				},8);
			});
	/*默认结束*/
	$qiehuan.tap(function(){
		$qiehuan.each(function(i){
			$qiehuan.eq(i).removeClass();
		});
		$(this).attr({'class':'active2'});
		/*如果是点击订阅开始*/
		if($(this).data('index')==1){
			var dingshuju=content.filter(function(v,i){
				return content[i].catid==1;
			})
			$('.body').empty();
			var dingel=$('.slider').clone();
			dingel.css({'display':'block'});
			var dingcontent=$('.contentding').clone();
			dingcontent.css({'display':'block'});
			dingshuju.forEach(function(v,i){
				dingcontent.children('*:nth-child(1)').append('<li><div><img src="'+v.picture+'" alt=""></div><div>'+v.title+'</div></li>');
			})
			$('.body').append(dingel);
			$('.body').append(dingcontent);
			/*轮播图*/
			var $slides=$('.slides li');
			$slides.bind('swipeLeft',function(){
				var cur,next;
				cur=$(this);
				if(cur.next().length){
					next=cur.next();
				}else{
					next=$slides.first();
				}
				cur.removeClass('active').addClass('zuoce');
				next.addClass('active');
				setTimeout(function(){
					cur.removeClass('zuoce');
				},325);
			})
			$slides.bind('swipeRight',function(){
				var cur,next;
				cur=$(this);
				if(cur.prev().length){
					next=cur.prev();
				}else{
					next=$slides.last();
				}
				cur.removeClass('active');
				setTimeout(function(){
					next.css({transition:'none'}).addClass('zuoce');
				},0)
				setTimeout(function(){
					next.css({transition:'left .325s linear'}).addClass('active').removeClass('zuoce');;
				},8);
			});
		}
		/*如果是点击订阅结束*/
		/*如果是点击热点开始*/
		if($(this).data('index')==2){
			$('.header .zuo').text('热点');
			var reshuju=content.filter(function(v,i){
				return content[i].catid==2;
			})
			$('.body').empty();
			reshuju.forEach(function(v,i){
				$reel=$('#yangben').clone();
				$reel.attr('id','');
				$reel.css({'display':'block'});
				$reel.find('p').text(v.title);
				$reel.find('span').text(v.small);
				$reel.find('img').attr('src',v.picture);
				$('.body').append($reel);
				//console.log($reel);
			});
		}
		/*如果是点击热点结束*/
		/*如果是点击玩乐开始*/
		if($(this).data('index')==3){
			$('.header .zuo').text('玩乐');
			var playshuju=content.filter(function(v,i){
				return content[i].catid==3;
			})
			$('.body').empty();
			playshuju.forEach(function(v,i){
				$playel=$('#playyangben').clone();
				$playel.attr('id','');
				$playel.css({'display':'block'});
				$playel.find('img').attr('src',v.picture);
				$playel.find('h5').text(v.title);
				$playel.find('span').text(v.small);
				$('.body').append($playel);
			})
		}
		/*如果是点击玩乐结束*/
		/*如果是点击社区开始*/
		if($(this).data('index')==4){
			$('.body').empty();
			$sheel=$('.shenav').clone();
			$sheel.css({'display':'block'});
			$('.body').append($sheel);
			$shebody=$('.shebody').clone();
			$shebody.css({'display':'block'});
			$('.body').append($shebody);
			$sheel.find('.sheli').each(function(i,v){
				$(this).data('index',smalllanmus[i].id);
			});
			var sheshuju=content.filter(function(v,i){
				return content[i].catid==4;
			})
			var sheguanshuju=sheshuju.filter(function(v,i){
				return sheshuju[i].smallid==1;
			})
			$shebody.find('.sheguan').css({'left':0});
			$shebody.find('.sheguan').find('img').attr('src',sheguanshuju[0].picture);
			var $prev;
			$prev=$shebody.find('.sheguan');
			$sheel.find('.sheli').tap(function(){
				$sheel.find('.sheli').css({'color':'#B0AFAF'});
				if($(this).data('index')==2){
					var jingshuju=sheshuju.filter(function(v,i){
						return sheshuju[i].smallid==2;
					})
					$('.block').css({left:$(this).width()+'px'});
					$(this).css({'color':'#FA4646'});
					$prev.css({'left':'-100%'});
					$shebody.find('.shejing').css({'left':0});
					$prev=$shebody.find('.shejing');
					jingshuju.forEach(function(v,i){
						$jingel=$('#jingyangben').clone();
						$jingel.attr('id','');
						$jingel.css({'display':'block'});
						$jingel.find('img').attr('src',v.smallpicture);
						$jingel.find('.shename').children('*:first-child').text(v.name);
						$jingel.find('.shename p').children('*:first-child').text(v.smallone);
						$jingel.find('.shename p').children('*:last-child').text(v.smalltwo);
						$jingel.find('.shezi').text(v.content);
						$jingel.find('.shetu img').attr('src',v.picture);
						$('.shejing').append($jingel);
					})
				}
				if($(this).data('index')==3){
					var fashuju=sheshuju.filter(function(v,i){
						return sheshuju[i].smallid==3;
					})
					$('.block').css({left:$(this).width()*2+'px'});
					$(this).css({'color':'#FA4646'});
					$prev.css({'left':'-100%'});
					$shebody.find('.shefa').css({'left':0});
					$prev=$shebody.find('.shefa');
					fashuju.forEach(function(v,i){
						$fael=$('#fayangben').clone();
						$fael.attr('id','');
						$fael.css({'display':'block'});
						$fael.find('.fatu').find('img').attr('src',v.picture);
						$fael.find('.fazi').find('span').text(v.title);
						$fael.find('.fazi').find('p').text(v.small);
						$fael.find('.fatubiao').find('img').attr('src',v.smallpicture);
						$('.shefa').append($fael);
					})
				}
				if($(this).data('index')==1){
					$('.block').css({left:0});
					$(this).css({'color':'#FA4646'});
					$prev.css({'left':'-100%'});
					$shebody.find('.sheguan').css({'left':0});
					$prev=$shebody.find('.sheguan');
					$shebody.find('.sheguan').css({'left':0});
					$shebody.find('.sheguan').find('img').attr('src',sheguanshuju[0].picture);
				}
			})
		}
		/*如果是点击社区结束*/
	})
})