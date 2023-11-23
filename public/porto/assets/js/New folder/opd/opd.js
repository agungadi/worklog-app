/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************!*\
  !*** ./resources/assets/js/countries/countries.js ***!
  \****************************************************/

$(document).ready(function () {
  var tablename = $('#countriesTable');
  tablename.DataTable({
    deferRender: true,
    scroller: true,
    processing: true,
    serverSide: true,
    'order': [[0, 'asc']],
    ajax: {
        url: route('opd.index')
    },
    columnDefs: [{
      'targets': [3],
      'width': '8%',
      'orderable': false,
      'className': 'text-center action-table-btn'
    }, {
      targets: '_all',
      defaultContent: 'N/A'
    }],
    columns: [{
      data: 'nama_skpd',
      name: 'nama_skpd'
    },
    {
        data: 'kode_skpd',
        name: 'kode_skpd'
      },
      {
        data: 'tahun',
        name: 'tahun'
      },
    {
      data: function data(row) {
        var url = route('opd.edit', row.id);
        var data = [{
          'id': row.id,
          'url': url
        }];
        return prepareTemplateRender('#countriesTemplate', data);
      },
      name: 'id'
    }
]
  });
  $(document).on('submit', '#createCountryForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#saveBtn');
    loadingButton.button('loading');
    $.ajax({
      url: route('opd.store'),
      type: 'POST',
      data: $(this).serialize(),
      success: function success(result) {
        if (result.success) {
          displaySuccessMessage(result.message);
          $('#countryModal').modal('hide');
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

  $('#countryModal').on('hidden.bs.modal', function () {
    resetModalForm('#createCountryForm', '#validationErrorsBox');
  });
  $(document).on('click', '.edit-btn', function (event) {
    var id = $(event.currentTarget).data('id');
    renderData(id);
  });

  function renderData(id) {
    $.ajax({
      url: route('opd.edit', id),
      type: 'GET',
      success: function success(result) {
        $('#countryFieldId').val(result.data.id);
        $('#editName').val(result.data.nama_skpd);
        $('#editKode').val(result.data.kode_skpd);
        $('#editTahun').val(result.data.tahun);

        // $('#editShortCode').val(result.data.short_code);
        // $('#editPhoneCode').val(result.data.phone_code);
        $('#editModal').modal('show');
      }
    });
  }

  $(document).on('submit', '#editCountryForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#editSaveBtn');
    loadingButton.button('loading');
    var id = $('#countryFieldId').val();
    $.ajax({
      url: route('opd.update', id),
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
    var countryId = $(event.currentTarget).data('id');
    var deleteCountryUrl = route('opd.destroy', countryId);
    deleteItem(deleteCountryUrl, '#countriesTable', 'OPD');
  });
});
/******/ })()
;
