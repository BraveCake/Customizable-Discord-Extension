// ==UserScript==
// @name         Discord Custom
// @namespace    http://tampermonkey.net/
// @version      6
// @description  try to take over the world!
// @author       BraveKek
// @match       https://discord.com/*
// @match        https://discord.com/channel/*
// @require http://code.jquery.com/jquery-3.5.1.min.js
// @grant        none
// @run-at       document-end
// @grant           GM_webRequest
// @webRequest   {"selector":"https://discord.com/api/v9/channels/*/typing","action":"cancel"}
// ==/UserScript==



const nitro = false; // set it to true if you use nitro it will disable copying emojis into your clipboard
const font_type = "cursive" // customize a font type for the entire page. only web safe fonts are supported, you may google "web safe fonts" for more details
const brightness = 100; // controls the brighness of the page, minimum value is 0 and the maximum is 100.
const imageUrl = "https://cdn.discordapp.com/attachments/815610760205565952/1094976704281329695/peakpx_1.jpg"; //change the url to url of the image which you want to use as a background but before that make sure that you have all color values set as transparent or none
/* the image may not work if you're using unsupported/ not well known website url so we recommend uploading images on discord to avoid experiencing unpleasant issues */
/* previous image : https://media.discordapp.net/attachments/691199564262146061/972072549846483004/unknown.png?width=1145&height=644" */
const cursor = "https://cdn.discordapp.com/attachments/691199564262146061/913052994013122640/pngegg.png"; //image of the custom cursor the size preferred to be 128px*128px make sure it's uploaded on discord because other websites might get blocked automatically by discord
const online = '255,111,255';//rgb value of online status leave it empty do use the default
const offline = '255,255,255'; //rgb value of offline status leave it empty to use the default
const dnd = '0,0,250'; //rgb value of dont disturb status leave it empty to use the default
const notificationImage="https://media.discordapp.net/attachments/810213552912203827/1033314055634559026/pngwing.com.png?width=676&height=619"//URL of the image that will appear when you click on any emoji it is just for notification purpose
var hideButton=1; //set it to zero if you dont want hide friends button


/* Avoid modifying any line has not comments next to it comment lines start with // or /* */

var $ = window.jQuery;
const none = 'none';
const auto_track = "hsl(1000,calc(var(--saturation-factor, 6)*9%),9%)";
(function go(){
    var successNotifier= document.createElement("div");
    successNotifier.style.cssText ="position:absolute; left:90%; top:90%; width:100px; height:100px;background-size:cover;border-radius:50%;visibility:hidden;"+"background-image:url('"+notificationImage+"')";
    document.body.appendChild(successNotifier);
    function hb(){
        // console.log("test");
    if (document.URL.startsWith("https://discord.com/channels/@me"))
        {
            if (hideButton!=1)
                return;

           let hide= document.createElement("button");
hide.innerHTML = "hide";
            hide.style["border-radius"]="30px";
            hide.onclick = ()=> $(".scroller__4b984.thin_b1c063.scrollerBase_dc3aa9.fade_ba0fa0").toggle();
            $(".searchBar_e4ea2a")[0].appendChild(hide);
            hideButton=-1;

        }
        else if(hideButton!=0)hideButton=1;
    }
    if (document.URL.startsWith("https://discord.com/widget?") || document.URL.startsWith("https://discord.com/developers/")){ //excepted discord pages
        return;}
 'use strict';
   $('head').append('<style>'+
                    '.theme-dark {'+
                    '--background-primary:rgba(0,0,0,0.2) !important        ;'+ //compositor color 0
                    '--background-secondary:transparent         !important;'+ //compository color 1
                    '--background-tertiary:none           !important;'+ //compository color  2
                   ' --background-accent:none            !important; '+ //compository color  3
                   '--bg-overlay-app-frame:none          !important; '+
                   ' --background-secondary-alt:none          !important;'+ //compository color  4
                    ' --text-muted:white                       !important;'+  // color of placeholders, some headers and message time
                    '--text-normal:white                         !important;'+ // text color of the messages
                    '--text-muted:white                          !important;'+ // color of placeholders, some headers and message time
                    '--channeltextarea-background:transparent  !important;' + //color of message typing box
                    '--scrollbar-auto-thumb:rgba(46, 49, 49, 1)              !important;'+ //scroll button color
                    '--scrollbar-auto-track:'+none+'              !important;'+//scroll line use auto_track to keep it visible or none to disable it unfortunately it's not possible to customize it yet
                    '}' +
                     '.applicationStore-1pNvnv{'+
                    'background-color:transparent                   !important;' +//color of nitro page recommendation : use transparent instead of none here
                    '}'+
                    '.scrollableContainer-15eg7h{'+
                    'background:transparent  !important;'+
                    '}'
                    +
                    '.emojiItemDisabled__36cbf{' +
                    'filter: grayscale(0%) !important;'+
                    '}'

                    +
                     '.scrollableContainer-2NUZem{'+
                    'background:transparent                         !important;'+ //Deprecated (might not work in the new version) typing-box
                    '}'+
                      '.tabBody-3YRQ8W{'+    //new typing
                    'background-image:0%  !important;'+
                    '}'+
                                          '.theme-dark .container-2cd8Mz{'+    //the new friends page
                    'background-color:transparent  !important;'+
                    '}'+
                                                              '.applicationStore-2nk7Lo{'+    //the new nitro page
                    'background-color:transparent !important;'+
                    '}'+
                    '::selection {background-color:#982C3B !important;}'  //color of any selection done by mouse
                    +
                    '.app__00c92{ background:none !important;}'+
                  '.theme-dark .container-1D34oG{'+
                    'background-color:transparent                   !important;}'+ //color of friends page(Deprecated (might not work in the new version)  recommendation : use transparent instead of none here
                    '.ready-36e6Vk{'+

                    '}'+
                      '.scroller-1Bvpku{'+
                    'background-color:rgba(46, 49, 49, 0.1)        !important ;}'+ //Server lists vertical bar color
                     '.members-1998pB{'+
                    'background-color:transparent                    !important;}'+ //Server Members List color

                    '.embedFull-2tM8--{'+
    'border-left: 4px solid black                                    !important;'+
   ' background: transparent                                         !important;}'+ //embed box background color

                   '.chatContent-a9vAAp{'+
   ' background-color: transparent                                    !important;}'+ //color of middle section of the app where send messages being sent
                   +
                    '.container-1r6BKw.themed-ANHk51{'+
                    'background-color: transparent                    !important;}' // customization of the upper most bar of the page which contains the channel name and search bar
                   +
                   'body,img,.clickable-3Ya1ho {cursor:'+ 'url('+cursor+'),auto !important}'+
                    '.theme-dark .background-fkKrXt{background:none !important;}'+
                 '.emojiItemDisabled-3VVnwp,.stickerUnsendable-PkQAxI{-webkit-filter;filter:none !important;}'+
                 '</style>');
/* by bravecake */
     $('body').css('--text-link','pink'); //color of urls
     $('body').css('background-image', 'url(' + imageUrl + ')');
    $('body').css('background-size', 'cover');
    $('body').css('filter','brightness('+brightness+'%)');
    $('body').css('font-family',font_type);
    $('body').css('cursor','url('+cursor+'),auto');
    $(document).ready(function() { setInterval(function () {hb();for (var l of document.querySelectorAll('button.emojiItemDisabled__36cbf')){l.addEventListener('click',function () {if(nitro)return; var t= this.firstChild.src[this.firstChild.src.length-4]=='='?this.firstChild.src.slice(0,this.firstChild.src.length-3)+'48':this.firstChild.src.slice(0,this.firstChild.src.length-1)+'8'; if(this.firstChild.dataset.type=='sticker')t=t.substr(0,t.length-2)+160;  navigator.clipboard.writeText(t.replace('&quality=lossles8','')); successNotifier.style.visibility="visible"; setTimeout(_=>successNotifier.style.visibility="hidden",2000); setTimeout(_=>$('.premiumPromoClose__11b8f,.upsellClose-72TQqH').click(),0); console.log(this.firstChild.src);});}let online_l =  $('rect[mask="url(#svg-mask-status-online)"]') ; for (let x of online_l) {if(online.length==0)break; x.setAttribute('fill','rgb('+online+')');} online_l =  $('rect[mask="url(#svg-mask-status-offline)"]') ; for (let x of online_l) {if(offline.length==0)break; x.setAttribute('fill','rgb('+offline+')');}online_l =  $('rect[mask="url(#svg-mask-status-dnd)"]') ; for (let x of online_l) {if(dnd.length==0)break; x.setAttribute('fill','rgb('+dnd+')');}},1000); });


   




})();
