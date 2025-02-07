// ==UserScript==
// @name         Discord Custom
// @namespace    http://tampermonkey.net/
// @version      8.2
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

/* ability to hide you're typing (stealth mode) doesn't work in manifest v3 */

const nitro = false; // set it to true if you use nitro it will disable copying emojis into your clipboard
const font_type = "cursive" // customize a font type for the entire page. only web safe fonts are supported, you may google "web safe fonts" for more details
const brightness = 100; // controls the brighness of the page, minimum value is 0 and the maximum is 100.
const imageUrl = "https://images-ext-1.discordapp.net/external/Lof33xo0fM2Qv3mdOH4g0pkQUDNGo70XqNoN8emkRlM/https/images.wallpapersden.com/image/download/anime-girl-looking-for-sunset_bmVsZmuUmZqaraWkpJRmbmpnrWZmZ2U.jpg?format=webp&"
      // "https://cdn.discordapp.com/attachments/815610760205565952/1094976704281329695/peakpx_1.jpg";  change the url to url of the image which you want to use as a background but before that make sure that you have all color values set as transparent or none
/* the image may not work if you're using unsupported/ not well known website url so we recommend uploading images on discord to avoid experiencing unpleasant issues */
/* previous image : https://media.discordapp.net/attachments/691199564262146061/972072549846483004/unknown.png?width=1145&height=644" */
const cursor = "https://cdn.discordapp.com/attachments/691199564262146061/913052994013122640/pngegg.png"; //image of the custom cursor the size preferred to be 128px*128px make sure it's uploaded on discord because other websites might get blocked automatically by discord
const online = '255,111,255';//rgb value of online status leave it empty do use the default
const offline = '255,255,255'; //rgb value of offline status leave it empty to use the default
const dnd = '0,0,250'; //rgb value of dont disturb status leave it empty to use the default
const notificationImage="https://media.discordapp.net/attachments/810213552912203827/1033314055634559026/pngwing.com.png?width=676&height=619"//URL of the image that will appear when you click on any emoji it is just for notification purpose
var hideButton=1; //set it to zero if you dont want "hide friends" button


/* Avoid modifying any line has not comments next to it comment lines start with // or /* */

var $ = window.jQuery;
const none = 'none';
const auto_track = "hsl(1000,calc(var(--saturation-factor, 6)*9%),9%)";
function preventDeletion(){
    var x = new MutationObserver(function (e) {
    if (e[0].removedNodes.length > 0) {
        let target = e[0].target;
        console.log("Deletion caught");
        let removedNode = e[0].removedNodes[0];
        let isSending = removedNode.innerHTML.includes("isSending__6e109")||  removedNode.innerHTML.includes("progress__41599") || removedNode.innerHTML.includes("divider__8cf56");
        if(!isSending)
          target.appendChild(e[0].removedNodes[0]);
    }
});

x.observe(document.getElementsByClassName("scrollerInner__059a5")[0], { childList: true });
}

(function go(){
    var successNotifier= document.createElement("div");
    successNotifier.style.cssText ="position:absolute; left:90%; top:90%; width:100px; height:100px;background-size:cover;border-radius:50%;visibility:hidden;"+"background-image:url('"+notificationImage+"')";
    document.body.appendChild(successNotifier);
    function addHidebutton(){
        // console.log("test");
    if (document.URL.startsWith("https://discord.com/channels/@me"))
        {
            if (hideButton!=1)
                return;

           let hide= document.createElement("button");
hide.innerHTML = "hide";
            hide.style["border-radius"]="30px";
            const messageSidebar= $("nav[aria-label='Private channels']");
            hide.onclick = ()=> messageSidebar.children().eq(1).toggle();
            messageSidebar.children().first().append(hide);
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
                    '.emojiItemDisabled__36cbf,.stickerUnsendable_a708c4{' +
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
                                                              '.applicationStore-2nk7Lo,.shop_b31ed2{'+    //the new nitro page & store
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
    $(document).ready(function() {
        setInterval(function () {
            addHidebutton();
            for (const l of document.querySelectorAll("button[data-type='emoji']")){
                l.addEventListener('click',function () {
                    let url = this.firstChild.src;
                    if(nitro) return;
                    if(url.lastIndexOf("animated=true")!=-1){  //animated emoji
                      url= url.trim("animated=true");
                      url = url.replace(".webp",".gif");
                    }
                    url = url.substring(0,url.lastIndexOf('size='));
                    let t = url+"size=48";
                    navigator.clipboard.writeText(t.replace('&quality=lossles8',''));
                    successNotifier.style.visibility="visible"; setTimeout(_=>successNotifier.style.visibility="hidden",2000);
                    setTimeout(_=>$('[aria-label="Close"]').click(),0);
                    console.log(t);
                });
            }
            for (let l of document.querySelectorAll("div[data-type='sticker']")){
                l.addEventListener('click',function () {
                    l = l.getElementsByTagName("img")[0];
                    if(nitro) return;
                    let url = l.src.substring(0,l.src.lastIndexOf('=',l.src.lastIndexOf('=')-1));
                    let t = url+"=240&quality=lossless";
                    navigator.clipboard.writeText(t.replace('&quality=lossles8',''));
                    successNotifier.style.visibility="visible"; setTimeout(_=>successNotifier.style.visibility="hidden",2000);
                    setTimeout(_=>$('.upsellClose_b8772d').click(),0);
                    console.log(t);
                });
            }


            let online_l =  $('rect[mask="url(#svg-mask-status-online)"]') ;
            for (let x of online_l) {
                if(online.length==0)break;
               x.setAttribute('fill','rgb('+online+')');}
            online_l  =  $('rect[mask="url(#svg-mask-status-offline)"]') ;
            for (let x of online_l) {
                if(offline.length==0)break;
                x.setAttribute('fill','rgb('+offline+')');}
            online_l =  $('rect[mask="url(#svg-mask-status-dnd)"]') ;
            for (let x of online_l)
            {if(dnd.length==0)break;
             x.setAttribute('fill','rgb('+dnd+')');
            }
        },1000); });
   //navigation.addEventListener("navigate", e => {console.log("hi");setTimeout(preventDeletion, 2000);});

   




})();
