/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./resources/assets/js/login/login.js ***!
  \********************************************/


$(document).ready(function () {
  $('#registerForm input:text').first().focus();
  $('.password').on('keypress', function (e) {
    if (e.which == 32) {
      return false;
    }
  });
  $(document).on('blur', '#username', function () {
    var data = $(this).val();

    if (data !== '') {
      $.ajax({
        url: checkUsernameUrl,
        type: 'GET',
        data: {
          'data': data
        },
        success: function success(result) {
          if (result.success) {
            $('.username-error').addClass('d-none');
            return true;
          }
        },
        error: function error(result) {
          $('.username-error').removeClass('d-none');
          $('.username-error').text(result.responseJSON.message);
          $('#username').val('');
        }
      });
    }
  });

  (function ($) {
    $.fn.button = function (action) {
      if (action === 'loading' && this.data('loading-text')) {
        this.data('original-text', this.html()).html(this.data('loading-text')).prop('disabled', true);
      }

      if (action === 'reset' && this.data('original-text')) {
        this.html(this.data('original-text')).prop('disabled', false);
      }
    };

    $('#overlay-screen-lock').hide();
  })(jQuery);

  if (typeof hasUserEmailVerified != 'undefined' && !hasUserEmailVerified) setTimeout(function () {
    $('.alert').fadeOut('slow');
  }, 3000);
  $('#email').focus();
  $(document).on('submit', '#registerForm', function (e) {
    e.preventDefault();
    processingBtn('#registerForm', '#btnRegister', 'loading');
    $('#registerForm')[0].submit();
  });
  $(document).on('submit', '#loginForm', function (e) {
    e.preventDefault();
    processingBtn('#loginForm', '#btnLogin', 'loading');
    $('#loginForm')[0].submit();
  });

  window.processingBtn = function (selecter, btnId) {
    var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var loadingButton = $(selecter).find(btnId);

    if (state === 'loading') {
      loadingButton.button('loading');
    } else {
      loadingButton.button('reset');
    }
  };
});
/******/ })()
;