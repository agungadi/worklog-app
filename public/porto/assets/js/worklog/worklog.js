/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/assets/js/states/states.js ***!
  \**********************************************/


$(document).ready(function () {
console.log("test worklog");
  $('#editopd,#createopd').select2({
    'width': '100%',
    'placeholder': 'Pilih Status'
  });
//   $('#editroles,#createrole').select2({
//     'width': '100%',
//     'placeholder': 'Pilih Roles'
//   });
  $('#filterCountry').select2({
    width: '170px'
  });
  $('#stateModal, #editModal').on('shown.bs.modal', function () {
    $(document).off('focusin.modal');
  });
  var tablename = $('#userTable');
  tablename.DataTable({
    deferRender: true,
    scroller: true,
    processing: true,
    serverSide: true,
    'order': [[0, 'asc']],
    ajax: {
      url: route('users.index'),
      data: function data(_data) {
        _data.unit_opd = $('#filterCountry').find('option:selected').val();
        console.log(_data.unit_opd);

    }
    },
    columnDefs: [{
      'targets': [5],
      'width': '8%',
      'orderable': false,
      'className': 'text-center action-table-btn'
    }, {
      targets: '_all',
      defaultContent: 'N/A'
    }],
    columns: [{
      data: 'title',
      name: 'title'
    }, {
      data: 'description',
      name: 'description'
    },
    {
        data: 'category',
        name: 'category'
      },
      {
        data: 'due_date',
        name: 'due_date'
      },
      {
        data: 'location',
        name: 'location'
      },
    {
      data: function data(row) {
        var url = route('worklog.edit', row.id);
        var data = [{
          'id': row.id,
          'url': url
        }];
        return prepareTemplateRender('#statesTemplate', data);
      },
      name: 'id'
    }],
    'fnInitComplete': function fnInitComplete() {
      $(document).on('change', '#filterCountry', function () {
        console.log('sada');
        $('#userTable').DataTable().ajax.reload(null, true);
        console.log('working');
      });
    }
  });
  $(document).on('submit', '#createStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#saveBtn');
    loadingButton.button('loading');
    $.ajax({
      url: route('users.store'),
      type: 'POST',
      data: $(this).serialize(),
      success: function success(result) {
        if (result.success) {
          displaySuccessMessage(result.message);
          $('#stateModal').modal('hide');
          $(tablename).DataTable().ajax.reload(null, false);
        }
      },
      error: function error(result) {
        displayErrorMessage(result.responseJSON.message);
      },
      complete: function complete() {
        loadingButton.button('reset');
      }
    });
  });
  $('#stateModal').on('hidden.bs.modal', function () {
    $('#editopd').val([]).trigger('change');
    $('#editroles').val([]).trigger('change');

    resetModalForm('#createStateForm', '#validationErrorsBox');
  });
  $(document).on('click', '.edit-btn', function (event) {
    var id = $(event.currentTarget).data('id');
    renderData(id);
  });

  function renderData(id) {
    $.ajax({
      url: route('users.edit', id),
      type: 'GET',
      success: function success(result) {
        console.log(result.data[0]);
        $('#stateFieldId').val(result.data[0].id);
        $('#editName').val(result.data[0].name);
        $('#editopd').val(result.data[0].unit_opd).trigger('change.select2');
        $('#editroles').val(result.data[0].role_id).trigger('change.select2');
        $('#editemail').val(result.data[0].email);
        $('#editusername').val(result.data[0].username);
        $('#editModal').modal('show');
      }
    });
  }

  $(document).on('submit', '#editStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#editSaveBtn');
    loadingButton.button('loading');
    var id = $('#stateFieldId').val();
    console.log(id);
    console.log($(this).serialize());
    $.ajax({
      url: route('users.update', id),
      type: 'PUT',
      data: $(this).serialize(),
      success: function success(result) {
        $('#editModal').modal('hide');
        displaySuccessMessage(result.message);
        $(tablename).DataTable().ajax.reload(null, false);
      },
      error: function error(result) {
        displayErrorMessage(result.responseJSON.message);
      },
      complete: function complete() {
        loadingButton.button('reset');
      }
    });
  });
  $(document).on('click', '.delete-btn', function (event) {
    var stateId = $(event.currentTarget).data('id');
    var deleteStateUrl = route('users.destroy', stateId);
    deleteItem(deleteStateUrl, '#userTable', 'User');
  });
});
/******/ })()
;
