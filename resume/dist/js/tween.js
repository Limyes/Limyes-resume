"use strict";

// 点击锚点跳转固定位置
!function () {
  var view = document.querySelector('nav.menu');
  var controller = {
    view: null,
    aTags: null,
    initAnimation: function initAnimation() {
      function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
      }
      requestAnimationFrame(animate);
    },
    init: function init(view) {
      this.view = view;
      this.bindEvents();
      this.aTags = this.view.querySelectorAll("nav.menu>ul>li>a");
      this.initAnimation();
      this.bindEvents();
    },
    scrollToElement: function scrollToElement(element) {
      var top = element.offsetTop;
      var currentTop = window.scrollY;
      var targetTop = top - 80;
      var s = targetTop - currentTop; // 路程
      var coords = { y: currentTop }; // 起始位置
      var t = Math.abs(s / 100 * 300); // 时间
      if (t > 500) {
        t = 500;
      }
      var tween = new TWEEN.Tween(coords) // 起始位置
      .to({ y: targetTop }, t) // 结束位置 和 时间
      .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
      .onUpdate(function () {
        window.scrollTo(0, coords.y); // 如何更新界面
      }).start(); // 开始缓动
    },
    bindEvents: function bindEvents() {
      var _this = this;

      var aTags = this.view.querySelectorAll("nav.menu>ul>li>a");
      for (var i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (x) {
          x.preventDefault();
          var href = x.currentTarget.getAttribute("href");
          var element = document.querySelector(href);
          _this.scrollToElement(element);
        };
      }
    }
  };
  controller.init(view);
}.call();