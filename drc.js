// ==UserScript==
// @name         Discord Ringtone Changer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       You
// @include      https://discordapp.com/channels/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    setTimeout(function() {
        Audio.prototype._play = Audio.prototype.play;
        Audio.prototype.play = function() {
            // 0.1%확률의 공식 희귀벨소리를 들으려면 아래 코드 추가
            // this.src = this.src.replace(/84a1b4e11d634dbfa1e5dd97a96de3ad/g, 'b9411af07f154a6fef543e7e442e4da9');
            /* alert(this,src); // 파일명 확인용 */
            
            if(this.src.includes("dd920c06a01e5bb8b09678581e29d56f")) { // 메시지 수신 알림음
                this.src = "(알림음의 MP3 주소 입력)";
            }
            if(this.src.includes("84a1b4e11d634dbfa1e5dd97a96de3ad")) { // 전화 수신 알림음
                this.src = "(벨소리 MP3 주소 입력)";
            }

            return this._play();
        };
    }, 10000);
})();
