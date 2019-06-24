// ==UserScript==
// @name Test
// @namespace http://tampermonkey.net/
// @version 3.0.7.10
// @description Test scr
// @author VerloreN
// @match https://vk.com/*
// @grant none
// ==/UserScript==

window.vkopt = (window.vkopt || {});
vkopt['vkopt_any_plugin'] = {
	onInit: function() {
		alert('all ok!');
	}

}