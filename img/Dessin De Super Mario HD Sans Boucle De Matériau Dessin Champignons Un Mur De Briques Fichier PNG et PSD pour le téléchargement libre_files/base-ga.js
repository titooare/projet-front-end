var Png={};$(function(){Png.BaseGA={};try{var a=getInjectData();a=a.type}catch(e){a=""}try{getData();a.type}catch(e){""}Png.BaseGA.Base_Public=function(){ga("require","GTM-PJ8J78F");var e="";switch(page_controller){case"index":i(e="Homepage"),$(".photos-wall").on("click",function(){ga("pngtree.send","event","Homepage&Love_Pngtree","click","lovepng")});break;case"cate":if(""==a)return;e=1==a?"Element_category_Page":"Back_category_Page";break;case"template":"category"==page_action?e="Template_category_Page":"search"==page_action&&(e="Template_Search_Page");break;case"ppt":"category"==page_action?e="Ppt_category_Page":"search"==page_action&&(e="Ppt_Search_Page");break;case"font":"category"==page_action&&(e="Font_category_Page");break;case"iconfont":"category"==page_action&&(e="Icon_category_Page");break;case"filter":if(""==a)return;e=1==a?"Element_Tags_Page":"Back_Tags_Page";break;case"element":"down"==page_action?e="Downloading_Page":"so"==page_action&&(e="Element_Search_Page");break;case"topic":e="Topic_page";break;case"back":"so"==page_action&&(e="Back_Search_Page");break;case"pay":l(),e="index"==page_action?"Premium_Page":"Recharge_Page";break;case"invite":e="Invite_Page";break;case"user":o(e="User_profile_page");break;default:e="Other_Search_Page"}t(e+"&head_navigation"),n(e+"&Scrolldown_navigation"),c(e+"&bottom_navigation")};var t=function(a){$("#v2-head").on("click",".ga-c",function(){var e=$(this).data("ga");console.log(e),void 0!==e&&ga("pngtree.send","event",a,"click",e)}),$("#v2-head").on("click",".language",function(){var e=$(this).data("type");void 0!==e&&ga("pngtree.send","event",a,"click","Language_list"+e)}),$("#v2-head").on("click",".head-notice-div,.mess",function(){$(this).hasClass("head-notice-div")?ga("pngtree.send","event",a,"click","Notice&Clean_all"):ga("pngtree.send","event",a,"click","Notice&Select_Row")}),$(".base-go-login").on("click",function(){var e="";switch($(this).data("type")){case"gg":e="Login&Register&Google";break;case"fb":e="Login&Register&FaceBook";break;case"tt":e="Login&Register&Twitter"}ga("pngtree.send","event",a,"click",e)})},n=function(a){$("#scroll-Nav").on("click",".ga-c",function(){var e=$(this).data("ga");console.log(e),void 0!==e&&ga("pngtree.send","event",a,"click",e)}),$("#scroll-Nav").on("click",".head-notice-div,.mess",function(){$(this).hasClass("head-notice-div")?ga("pngtree.send","event",a,"click","Notice&Clean_all"):ga("pngtree.send","event",a,"click","Notice&Select_Row")})};Png.BaseGA.ScrolldownSearch=function(e){ga("pngtree.send","event",e,"click",e)},Png.BaseGA.IndexSearch=function(e){ga("pngtree.send","event","Homepage&Scrolldown_navigation","click",e)};var c=function(a){$(".foot-link").on("click",function(){var e=$(this).data("ga");void 0!==e&&ga("pngtree.send","event",a,"click",e)}),$("#v2-foot").on("click",".language",function(){var e=$(this).data("type");void 0!==e&&ga("pngtree.send","event",a,"click","Language_list"+e)})},i=function(l){""!=l&&$(".element-list-click,.tem-list-click,.font-list-click,.back-list-click,.icon-list-click,.ppt-list-click").on("click",function(){var e=l+"&",a=$(this),t="";if(a.hasClass("element-list-click"))t=e+"Graphic_Design";else if(a.hasClass("tem-list-click"))t=e+"Template";else if(a.hasClass("font-list-click"))t=e+"Font";else if(a.hasClass("back-list-click"))t=e+"Back";else if(a.hasClass("ppt-list-click"))t=e+"Ppt";else{if(!a.hasClass("icon-list-click"))return;t=e+"Icon"}var n=a.data("ga");if(void 0===n){var c=a.data("down");if(void 0===c){var i=a.data("like");if(void 0===i)return;ga("pngtree.send","event",t,"click","like"+i)}else ga("pngtree.send","event",t,"click","Download"+c)}ga("pngtree.send","event",t,"click",n)})},l=function(){Pngtree.BaseFun.Ga_Deploy_Class(".ga-pay-buynow","Premium_Page","Buy_Now","ga"),$(".pay_credit").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Recharge_Page","Recharge_Method","Credit_Card")}),$(".pay_local").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Recharge_Page","Recharge_Method","Local_Payment")}),$(".pay_pal").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Recharge_Page","Recharge_Method","Paypal")}),$("#start-show-pay-box").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Recharge_Page","Submit_Order_Btn","Credit_Card")}),$(".paypal-link").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Recharge_Page","Submit_Order_Btn","Paypal")}),$(".paymentwall-commit").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Recharge_Page","Submit_Order_Btn","Paymentwall")})},o=function(a){$(".user-click").on("click",function(){var e=$(this).data("ga");void 0!==e&&ga("pngtree.send","event",a,"click",e)})};Png.BaseGA.Ga_Search=function(e){if(""!=e){var a="";switch(page_controller){case"element":if(""==e)return;a=1==e?"Element_Detailpage":5==e?"Template_Detailpage":"Font_Detailpage";break;case"back":a="Back_Detailpage";break;case"ppt":a="Ppt_Detailpage";break;default:return}var t="";switch(e){case 1:t="Element";break;case 2:t="Back";break;case 5:t="Template";break;case 6:t="PPT";break;case 7:t="Font"}ga("pngtree.send","event",a,"click","search_"+t)}},Png.BaseGA.Ga_Share=function(e,a){if(""!=e){var t="";switch(page_controller){case"element":if(""==e)return;t=1==e?"Element_Detailpage":5==e?"Template_Detailpage":"Font_Detailpage";break;case"back":t="Back_Detailpage";break;case"ppt":t="Ppt_Detailpage";break;default:return}ga("pngtree.send","event",t,"click","share_"+a)}},Png.BaseGA.Ga_Detail=function(){$(".element-clickme").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Element_Detailpage","Click_Here","click")}),$(".tem-clickme").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Template_Detailpage","Click_Here","click")}),$(".font-clickme").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Font_Detailpage","Click_Here","click")}),$(".back_clickme").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Back_Detailpage","Click_Here","click")}),$(".element_down_jpg").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Element_Detailpage","Down_JPG","click")}),$(".back_jpg").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Back_Detailpage","Down_JPG","click")}),$(".back_rar").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Back_Detailpage","Down_RAR","click")}),$(".element_down_rar").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Element_Detailpage","Down_RAR","click")}),$(".font-png").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Font_Detailpage","Down_Png","click")}),$(".font-pad").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Font_Detailpage","Down_Psd","click")}),$(".font-list-click").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Font_Detailpage","Small_List","click")}),Pngtree.BaseFun.Ga_Deploy_Href(".element_cate_click","Element_Detailpage","Cate"),Pngtree.BaseFun.Ga_Deploy_Href(".font-cate","Font-Detail","Cate"),Pngtree.BaseFun.Ga_Deploy_Href(".back-cate","Back_Detailpage","Cate"),$(".element_like").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Element_Detailpage","Like","click")}),$(".ele_der").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Element_Detailpage","Desiger","click")}),Pngtree.BaseFun.Ga_Deploy_Href(".ele_keyword a","Element_Detailpage","Keyword_List"),Pngtree.BaseFun.Ga_Deploy_Href(".tem_keyword a","Template_Detailpage","Keyword_List"),Pngtree.BaseFun.Ga_Deploy_Href(".back_keyword a","Back_Detailpage","Keyword_List"),Pngtree.BaseFun.Ga_Deploy_Href(".font-keyword a","Font_Detailpage","Keyword_List"),Pngtree.BaseFun.Ga_Deploy_Href(".ele_report","Element_Detailpage","Report"),Pngtree.BaseFun.Ga_Deploy_Href(".tem_report","Template_Detailpage","Report"),Pngtree.BaseFun.Ga_Deploy_Href(".back_report","Back_Detailpage","Report"),Pngtree.BaseFun.Ga_Deploy_Href(".font-report","Font_Detailpage","Report"),Pngtree.BaseFun.Ga_Deploy_Href(".ele_recommend a","Element_Detailpage","Relatedkeyword_List"),Pngtree.BaseFun.Ga_Deploy_Href(".tem_recommend a","Template_Detailpage","Relatedkeyword_List"),Pngtree.BaseFun.Ga_Deploy_Href(".back_recommend a","Back_Detailpage","Relatedkeyword_List"),Pngtree.BaseFun.Ga_Deploy_Class(".element-list-click","Element_Detailpage","List","ga"),Pngtree.BaseFun.Ga_Deploy_Class(".back-list-click","Element_Detailpage","List","ga"),$(".down-agree").on("click",function(){Pngtree.BaseFun.Ga_Deploy("Element&Template&Font&PRF","click","click")}),$(".down-font-png").on("click",function(){var e=$(this).data("ga");ga("pngtree.send","event","detail-font-down","click",e+"_psd")}),$(".down-font-psd").on("click",function(){var e=$(this).data("ga");ga("pngtree.send","event","detail-font-down","click",e+"_psd")})},Png.BaseGA.Base_Public()});