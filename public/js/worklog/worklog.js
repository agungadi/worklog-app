/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/assets/js/states/states.js ***!
  \**********************************************/


$(document).ready(function () {
console.log("test worklog");
  $('#editstatus,#createstatus').select2({
    'width': '100%',
    'placeholder': 'Pilih Status'
  });
  $('#editProject,#createProject').select2({
    'width': '100%',
    'placeholder': 'Pilih Project'
  });
  $('#waktu').select2({
    'width': '100%',
    'placeholder': 'Pilih Waktu'
  });
  $('#filterStatus').select2({
    width: '170px'
  });
  $('#filterProject').select2({
    width: '170px'
  });
  $('#stateModal, #editModal').on('shown.bs.modal', function () {
    $(document).off('focusin.modal');
  });
  var tablename = $('#worklogTable');
  tablename.DataTable({
    deferRender: true,
    scroller: true,
    processing: true,
    serverSide: true,
    'order': [[0, 'asc']],
    ajax: {
      url: route('worklog.index'),
      data: function data(_data) {
        _data.status = $('#filterStatus').find('option:selected').val();
        _data.project = $('#filterProject').find('option:selected').val();

        console.log(_data);

    }
    },
    columnDefs: [{
      'targets': [6],
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
      data: 'waktu',
      name: 'waktu'
    },
    {
        data: 'poin',
        name: 'poin'
      },
    {
        data: 'status',
        name: 'status'
      },
      {
        data: 'tanggal',
        name: 'tanggal'
      },
      {
        data: 'lokasi',
        name: 'lokasi'
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
      $(document).on('change', '#filterStatus, #filterProject', function () {
        console.log('Selected value:', $('#filterStatus').val());
        console.log('Selected value:', $('#filterProject').val());

        $('#worklogTable').DataTable().ajax.reload(null, true);
      });
    }
  });
  $(document).on('submit', '#createStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#saveBtn');
    loadingButton.button('loading');
    $.ajax({
      url: route('worklog.store'),
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
    $('#createstatus').val([]).trigger('change');
    $('#createProject').val([]).trigger('change');

    resetModalForm('#createStateForm', '#validationErrorsBox');
  });
  $(document).on('click', '.edit-btn', function (event) {
    var id = $(event.currentTarget).data('id');
    console.log(id);
    renderData(id);
  });

  function renderData(id) {
    $.ajax({
      url: route('worklog.edit', id),
      type: 'GET',
      success: function success(result) {
        console.log("masuk g");

        console.log(result.data.tanggal);
        var formattedDate = result.data.tanggal.split(' ')[0];

        $('#stateFieldId').val(result.data.id);
        $('#ediTitle').val(result.data.title);
        $('#editDeskripsi').val(result.data.deskripsi);
        $('#editProject').val(result.data.project_id).trigger('change.select2');
        $('#editstatus').val(result.data.status).trigger('change.select2');
        $('#editTanggal').val(formattedDate);
        $('#editlokasi').val(result.data.lokasi);
        $('#editwaktu').val(result.data.waktu);
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
      url: route('worklog.update', id),
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
    var deleteStateUrl = route('worklog.destroy', stateId);
    deleteItem(deleteStateUrl, '#worklogTable', 'Worklog');
  });
});
/******/ })()
;
