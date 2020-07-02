// ==UserScript==
// @name         Discord Tweaks
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       You
// @include      https://canary.discord.com/channels/*
// @include      https://ptb.discord.com/channels/*
// @include      https://discord.com/channels/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function $(x) {
        return document.querySelector(x);
    }

    setTimeout(function() {
        Audio.prototype._play = Audio.prototype.play;
        Audio.prototype.play = function() {
            /* 0.1%확률의 공식 희귀벨소리를 들으려면 아래 코드 추가 */
            /* this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'b9411af07f154a6fef543e7e442e4da9'); */
            /* alert(this.src); // 파일명 확인용 */

            if(this.src.includes("dd920c06a01e5bb8b09678581e29d56f")) { // 메시지 수신 알림음
                this.src = "(알림음의 MP3 주소 입력)";
            }
            if(this.src.includes("84a1b4e11d634dbfa1e5dd97a96de3ad")) { // 전화 수신 알림음
                this.src = "(벨소리 MP3 주소 입력)";
            }

            return this._play();
        };
    }, 10000);

    /* 옛날 버전처럼 자리비움, 방해금지도 원형이 뜨게 한다. */
	function removeAll(x) {
		for(var e of document.querySelectorAll(x)) {
			e.remove();
		}
	}
    
    const icon = '<circle fill="white" cx="0.5" cy="0.5" r="0.5"></circle>';

    setInterval(function() {
        $("mask#svg-mask-status-idle").innerHTML = icon;
        $("mask#svg-mask-status-dnd").innerHTML = icon;
        $("mask#svg-mask-status-offline").innerHTML = icon;
        $("mask#svg-mask-status-streaming").innerHTML = icon;
        removeAll('rect[x="6.25"][y="3.75"][width="7.5"][height="7.5"][rx="3.75"][ry="3.75"][fill="black"]');
        removeAll('rect[x="-1.25"][y="1.25"][width="7.5"][height="7.5"][rx="3.75"][ry="3.75"][fill="black"]');
        removeAll('rect[x="8.75"][y="8.75"][width="7.5"][height="2.5"][rx="1.25"][ry="1.25"][fill="black"]');
        removeAll('rect[x="1.25"][y="6.25"][width="7.5"][height="2.5"][rx="1.25"][ry="1.25"][fill="black"]');
        removeAll('rect[x="10"][y="7.5"][width="5"][height="5"][rx="2.5"][ry="2.5"][fill="black"]');
        removeAll('rect[x="2.5"][y="5"][width="5"][height="5"][rx="2.5"][ry="2.5"][fill="black"]');
    }, 750);
})();
