/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/assets/js/states/states.js ***!
  \**********************************************/


$(document).ready(function () {
  $('#editstatus,#createstatus').select2({
    'width': '100%',
    'placeholder': 'Pilih Status'
  });


  $('#filterStatus').select2({
    width: '170px'
  });

  $('#stateModal, #editModal').on('shown.bs.modal', function () {
    $(document).off('focusin.modal');
  });
  var tablename = $('#projectTable');
  tablename.DataTable({
    deferRender: true,
    scroller: true,
    processing: true,
    serverSide: true,
    'order': [[0, 'asc']],
    ajax: {
      url: route('project.index'),
      data: function data(_data) {
        _data.status = $('#filterStatus').find('option:selected').val();


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
      data: 'name_project',
      name: 'name_project'
    }, {
      data: 'status',
      name: 'status'
    },
      {
        data: 'start_date',
        name: 'start_date'
      },
      {
        data: 'due_date',
        name: 'due_date'
      },

      {
        data: 'total_jam',
        name: 'total_jam'
      },
    {
      data: function data(row) {
        var url = route('project.edit', row.id);
        var data = [{
          'id': row.id,
          'url': url
        }];
        return prepareTemplateRender('#statesTemplate', data);
      },
      name: 'id'
    }],
    'fnInitComplete': function fnInitComplete() {
      $(document).on('change', '#filterStatus', function () {
        console.log('Selected value:', $('#filterStatus').val());

        $('#projectTable').DataTable().ajax.reload(null, true);
      });
    }
  });
  $(document).on('submit', '#createStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#saveBtn');
    loadingButton.button('loading');
    $.ajax({
      url: route('project.store'),
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
    $('#editstatus').val([]).trigger('change');

    resetModalForm('#createStateForm', '#validationErrorsBox');
  });
  $(document).on('click', '.edit-btn', function (event) {
    var id = $(event.currentTarget).data('id');
    console.log(id);
    renderData(id);
  });

  function renderData(id) {
    $.ajax({
      url: route('project.edit', id),
      type: 'GET',
      success: function success(result) {

        console.log(result.data);
        var formattedStart = result.data.start_date.split(' ')[0];
        var formattedDue = result.data.due_date.split(' ')[0];

        $('#stateFieldId').val(result.data.id);
        $('#ediTitle').val(result.data.name_project);
        $('#editstatus').val(result.data.status).trigger('change.select2');
        $('#editStart').val(formattedStart);
        $('#editDue').val(formattedDue);
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
      url: route('project.update', id),
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
    var deleteStateUrl = route('project.destroy', stateId);
    deleteItem(deleteStateUrl, '#projectTable', 'Project');
  });
});
/******/ })()
;
