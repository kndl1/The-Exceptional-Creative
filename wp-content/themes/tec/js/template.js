/* Copyright (C) 2007 - 2011 YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($){

	if($('#random-post').is('.post-1')) {
		//alert("test");
	}

	/* Accordion menu */
	$('.menu-accordion').accordionMenu({ mode:'slide' });
	
	/* Follower */
	$('div.mod-line ul.menu').follower({effect: {transition: 'linear', duration: 200}})

	/* Smoothscroller */
	$('a[href="#page"]').smoothScroller({ duration: 500 });

	/* Spotlight */
	$('.spotlight').spotlight({fade: 300});

	/* Match height of div tags */
	var matchHeight = function() {
		$('#top > .horizontal div.deepest').matchHeight(20);
		$('#bottom > .horizontal div.deepest').matchHeight(20);
		$('#maintop > .horizontal div.deepest').matchHeight(20);
		$('#mainbottom > .horizontal div.deepest').matchHeight(20);
		$('#contenttop > .horizontal div.deepest').matchHeight(20);
		$('#contentbottom > .horizontal div.deepest').matchHeight(20);
		//$('.page-page-id-114 > .content, #left, #right').matchHeight(20);
		//$('#mainmiddle, #contentleft, #contentright').matchHeight(20);
	};

	/* Animate background position */
	var animateBackgroungPos = function(selector, options) {
		
		if((navigator.userAgent.match(/(iPhone|iPod|iPad)/i))) {
			return;
		}
		
		var elements = $(selector);

		var options = $.extend({
			transition: 'linear',
			repeat: 5,
			duration: 5000,
			direction: 1,
			width: 558
		}, options);
		
		var timer = false;
		
		function animate() {
			
			if(options.repeat==-1) {
				clearInterval(timer);
				return;
			}
			
			$(elements).each(function(i){
				
				if ($.browser.msie) {
					$(this).stop().css({'background-position-x': "0px", 'background-position-y': "40px"}).animate({ 
						'background-position-x': (options.direction * options.width) + "px",
						'background-position-y': "40px" 
					}, options.duration, options.transition );
				} else {
				
					$(this).stop().css('background-position', "0px 40px").animate({ 
						'background-position': (options.direction * options.width) + "px 40px" 
					}, options.duration, options.transition );
				
				}
			});
			
			options.repeat--;
			
			if(options.repeat==0) {
				options.transition = 'easeOutSine';
				options.duration = 2 * options.duration;
			}	
		}
		
		if (options.repeat) {
			timer = window.setInterval(animate, options.duration);
			animate();
		}	
	}
	
	var bgwidth = 558;
	var bgduration = 5000;
	
	switch(Warp.Settings.background) {
		
		case 'disco':
			repeat = 2;
			bgduration = 12500;
			bgwidth = 759;
			break;
			
		case 'jellyfish':
			repeat = 2;
			bgduration = 12500;
			bgwidth = 1028;
			break;
			
		case 'nebula':
			repeat = 2;
			bgduration = 20000;
			bgwidth = 556;
			break;
			
		case 'spotlights':
			repeat = 2;
			bgduration = 12500;
			bgwidth = 556;
			break;
		
	}
	
	$('#menu').css("visibility", "hidden");
	
	$(window).bind("load", function(){
		
		matchHeight();
		
		/* Dropdown menu */
		$('#menu-main-menu').dropdownMenu({ mode: 'slide', dropdownSelector: 'div.dropdown:first', centerDropdown: true, fixWidth: true}).css("visibility", "visible");	
		$('#menu-toolkit-submenu').dropdownMenu({ mode: 'slide', dropdownSelector: 'div.dropdown:first', centerDropdown: true, fixWidth: true}).css("visibility", "visible");	
		
		if (Warp.Settings.bganimation == 1) {
			animateBackgroungPos('div#page-body', {direction: -1, width: bgwidth, duration: bgduration});
		}		
	})

 $('#columnize').columnize({ columns: 2, width: 440 });
 //$('#columnize br').addClass("dontsplit");

  var NewLink = $('#contenttop .link a').attr("href");
  $('#menu-main-menu li.level1.item3 a').attr("href", NewLink);



			$("a[rel=preview]").fancybox({
				'transitionIn'		: 'fade',
				'transitionOut'		: 'fade',
				'titleShow' 	: true,
				'titlePosition' : 'inside',
				'showCloseButton' : false,
				'autoDimensions' : false,
				'autoScale' : false,
				'width' : 700,
				'centerOnScroll' : true
			});
$('#left .module.first img').click(function() {
    $("a[rel=preview]").triggerHandler('click', function() { $("a[rel=preview]").fancybox.pos(0); });	
});

var leftHeight = $('#left').height();
$('.page-page-id-114 #system .item > .content, .page-page-id-110 #system .item > .content').css('height', leftHeight - 25);

	var NamePrevious = 'Subscribe.';	
	// clear input on focus
	jQuery('#mc-embedded-subscribe-form #mce-EMAIL').focus(function()
	{
		if(jQuery('#mc-embedded-subscribe-form #mce-EMAIL').val()!='')
		{
			NamePrevious = jQuery('#mc-embedded-subscribe-form #mce-EMAIL').val();
			jQuery('#mc-embedded-subscribe-form #mce-EMAIL').val('');
		}
	});
	// if field is empty afterward, add text again
	jQuery('#mc-embedded-subscribe-form #mce-EMAIL').blur(function()
	{
		if(jQuery(this).val()=='')
		{
			jQuery('#mc-embedded-subscribe-form #mce-EMAIL').val(NamePrevious);
		}
	});

	var SearchPrevious = 'search the site';	
	// clear input on focus
	jQuery('#searchbox input').focus(function()
	{
		if(jQuery('#searchbox input').val()!='')
		{
			SearchPrevious = jQuery('#searchbox input').val();
			jQuery('#searchbox input').val('');
		}
	});
	// if field is empty afterward, add text again
	jQuery('#searchbox input').blur(function()
	{
		if(jQuery(this).val()=='')
		{
			jQuery('#searchbox input').val(SearchPrevious);
		}
	});


$('#contact-form input[type="submit"]').click(function() {
if($('#contact-form input[value^="Yes"]').is(":checked")) {

              $('input[name="hidden-574"]').val($('input[name="your-email"]').val());


              } else {

              $('input[name="hidden-574"]').val('');

              }
});
$('#contact-form input[value^="No"]').click(function() {
if($('#contact-form input[value^="No"]').is(":checked")) {

              $('input[name="hidden-574"]').val('');

              }
});



});

;(function($) {
try {
    var jqueryLoaded=jQuery;
    jqueryLoaded=true;
} catch(err) {
    var jqueryLoaded=false;
}


var fnames = new Array();var ftypes = new Array();fnames[2]='MMERGE2';ftypes[2]='text';fnames[0]='EMAIL';ftypes[0]='email';
var freed_fnames = new Array();var freed_ftypes = new Array();freed_fnames[2]='MMERGE2';freed_ftypes[2]='text';freed_fnames[0]='EMAIL';freed_ftypes[0]='email';
try{
    err_style = '';
} catch(e){
    err_style = '';
}
var head= document.getElementsByTagName('head')[0];
var style= document.createElement('style');
style.type= 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = '.mce_inline_error {' + err_style + '}';
} else {
  style.appendChild(document.createTextNode('.mce_inline_error {' + err_style + '}'));
}
head.appendChild(style);
$(document).ready( function($) {

jQuery.validator.addMethod('required_group', function(val, el) {
        return $module.find('.required_group:filled').length;
});
    jQuery.validator.addMethod('required_group', function(value, element, checked) {
            var $module = $(element).parents('.input-group');
            return $module.find('input:checked').length;
            });


jQuery.validator.messages.required_group = 'Please choose at least one section to subscribe to.';
  var options = { invalidHandler: function(form, validator) {
	                    var errors = validator.numberOfInvalids();
	                    if (errors) {
	                        alert(validator.errorList[0].message);
	                        validator.errorList[0].element.focus();
	                    }
	                },
errorClass: 'mce_inline_error', onkeyup: function(){}, onfocusout:function(){}, onblur:function(){}  };
  var mce_validator = $("#mc-embedded-subscribe-form").validate(options);
  foptions = { url: 'http://studiompdx.us1.list-manage.com/subscribe/post-json?u=ec6437a6752494dc81db14ae6&id=001dad8e7c&c=?', type: 'GET', dataType: 'json', contentType: "application/json; charset=utf-8",
                beforeSubmit: function(){
                    $('#mce_tmp_error_msg').remove();
                    $('.datefield','#mc_embed_signup').each(
                        function(){
                            var txt = 'filled';
                            var fields = new Array();
                            var i = 0;
                            $(':text', this).each(
                                function(){
                                    fields[i] = this;
                                    i++;
                                });
                            $(':hidden', this).each(
                                function(){
                                	if ( fields[0].value=='MM' && fields[1].value=='DD' && fields[2].value=='YYYY' ){
                                		this.value = '';
									} else if ( fields[0].value=='' && fields[1].value=='' && fields[2].value=='' ){
                                		this.value = '';
									} else {
	                                    this.value = fields[0].value+'/'+fields[1].value+'/'+fields[2].value;
	                                }
                                });
                        });
                    return mce_validator.form();
                }, 
                success: mce_success_cb
            };
  $('#mc-embedded-subscribe-form').ajaxForm(foptions);


});

function mce_success_cb(resp){
    $('#mce-success-response').hide();
    $('#mce-error-response').hide();
    if (resp.result=="success"){
        //$('#mce-'+resp.result+'-response').show();
        //$('#mce-'+resp.result+'-response').html(resp.msg);
        alert(resp.msg); 
        $('#mc-embedded-subscribe-form').each(function(){
            this.reset();
    	});
    } else {
        var index = -1;
        var msg;
        try {
            var parts = resp.msg.split(' - ',2);
            if (parts[1]==undefined){
                msg = resp.msg;
            } else {
                i = parseInt(parts[0]);
                if (i.toString() == parts[0]){
                    index = parts[0];
                    msg = parts[1];
                } else {
                    index = -1;
                    msg = resp.msg;
                }
            }
        } catch(e){
            index = -1;
            msg = resp.msg;
        }
        try{
            if (index== -1){
                //$('#mce-'+resp.result+'-response').show();
                //$('#mce-'+resp.result+'-response').html(msg); 
                alert(msg);           
            } else {
                err_id = 'mce_tmp_error_msg';
                html = '<div id="'+err_id+'" style="'+err_style+'"> '+msg+'</div>';

                var input_id = '#mc_embed_signup';
                var f = $(input_id);
                if (ftypes[index]=='address'){
                    input_id = '#mce-'+fnames[index]+'-addr1';
                    f = $(input_id).parent().parent().get(0);
                } else if (ftypes[index]=='date'){
                    input_id = '#mce-'+fnames[index]+'-month';
                    f = $(input_id).parent().parent().get(0);
                } else {
                    input_id = '#mce-'+fnames[index];
                    f = $().parent(input_id).get(0);
                }
                if (f){
                    $(f).append(html);
                    $(input_id).focus();
                } else {
                    $('#mce-'+resp.result+'-response').show();
                    $('#mce-'+resp.result+'-response').html(msg);
                }
            }
        } catch(e){
            //$('#mce-'+resp.result+'-response').show();
            //$('#mce-'+resp.result+'-response').html(msg);
			alert(msg);   
        }
    }
}




})(jQuery);

Cufon.replace('#menu-main-menu a.level1 span.bg, #menu-main-menu span.level1 span.bg, #footerleft .module, #mc_signup_submit', { hover:true, fontFamily:'Trade Gothic LT Std' });
Cufon.replace('#menu-toolkit-submenu a.level1 span.bg, #menu-toolkit-submenu span.level1 span.bg, #cartbuttons a', { hover:true, fontFamily:'TradeGothic LT CondEighteen' });
Cufon.replace('#headerbar .right .module, #preview-callout .small .three', { fontFamily:'Caecilia LT Std' });
Cufon.replace('#footerleft .header', { fontFamily:'Caecilia Light' });
Cufon.replace('.pagination, #contact-form .wpcf7-submit, #contenttop div.mod-box div.box-1, .page-title h1, #right .module h3.header, .empty-text, #preview-callout .large, #preview-callout .small .one,  #preview-callout .small .two,  #preview-callout .small .four, #mainbottom h3.header', { hover:true, fontFamily:'Trade Gothic LT Std' });
Cufon.replace('#respond h2, #comments h3.comments-meta, #contentright .module.excerpt .more a, #contentright .header-3, .blogitem .title, #contentright .title, #contentright .subtitle, #footerright .subtitle, #footerright .module .subtitle, #footerright .module .title, #footercenter .module .title', { fontFamily:'Trade Gothic LT Std' });
Cufon.replace('.meta b, .social-container', { fontFamily:'Trade Gothic LT Std' });