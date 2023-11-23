/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/assets/js/states/states.js ***!
  \**********************************************/


$(document).ready(function () {
  $('#filterStatus').select2({
    width: '170px'
  });
  $('#filterUsers').select2({
    width: '170px'
  });
  var tablename = $('#dailyTable');
  tablename.DataTable({
    deferRender: true,
    scroller: true,
    processing: true,
    serverSide: true,
    'order': [[0, 'asc']],
    ajax: {
      url: route('daily.index'),
      data: function data(_data) {
        _data.work_date = $('#filterStatus').find('option:selected').val();
        _data.users = $('#filterUsers').find('option:selected').val();
    }
    },
    columnDefs: [{
      'targets': [2],
      'width': '8%',
      'orderable': false,
      'className': 'text-center action-table-btn'
    }, {
      targets: '_all',
      defaultContent: 'N/A'
    }],
    columns: [{
      data: 'work_date',
      name: 'work_date'
    }, {
      data: 'poin',
      name: 'poin'
    },
    {
        data: 'total_jam_worklogs',
        name: 'total_jam_worklogs'
    }],
    'fnInitComplete': function fnInitComplete() {
      $(document).on('change', '#filterStatus, #filterUsers', function () {
        console.log('Selected value:', $('#filterStatus').val());
        console.log('Selected value:', $('#filterUsers').val());

        $('#dailyTable').DataTable().ajax.reload(null, true);
      });
    }
  });
});
/******/ })()
;
