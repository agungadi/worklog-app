/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/assets/js/states/states.js ***!
  \**********************************************/


$(document).ready(function () {
  $('#countryFieldID,#editCountryFieldID').select2({
    'width': '100%',
    'placeholder': 'Pilih Indikator'
  });
  $('#filterCountry').select2({
    width: '170px'
  });
  $('#stateModal, #editModal').on('shown.bs.modal', function () {
    $(document).off('focusin.modal');
  });
  var tablename = $('#tahap3Table');
  tablename.DataTable({
    deferRender: true,
    scroller: true,
    processing: true,
    serverSide: true,
    'order': [[0, 'asc']],
    ajax: {
      url: route('penilaian.index'),
      data: function data(_data) {
        _data.indikator_id = $('#filterCountry').find('option:selected').val();
      }
    },
    columnDefs: [{
      'targets': [2],
      'width': '8%',
      'orderable': false,
      'className': 'text-center action-table-btn'
    },{
      'targets': 1,
      'visible': false,
    },
    {
        render: function (data) {
            return "<div class='text-wrap width-200'>" + data + "</div>";
        },
        targets: 0
    },
    {
      targets: '_all',
      defaultContent: 'N/A'
    }],
    columns: [{
      data: 'name',
      name: 'name'
    }, {
      data: 'indikator.name',
      name: 'indikator_id'
    }, {
      data: function data(row) {
        var url = route('penilaian.edit', row.id);
        var data = [{
          'id': row.id,
          'url': url
        }];
        return prepareTemplateRender('#statesTemplate', data);
      },
      name: 'id'
    }],
    order: [[1, 'asc']],
    drawCallback: function (settings) {
        var api = this.api();
        var rows = api.rows({ page: 'current' }).nodes();
        var last = null;

        api
            .column(1, { page: 'current' })
            .data()
            .each(function (group, i) {
                if (last !== group) {
                    $(rows)
                        .eq(i)
                        .before('<tr class="group" ><td colspan="3">[Indikator] ' + group + '</td></tr>');

                    last = group;
                }
            });
    },
    'fnInitComplete': function fnInitComplete() {
      $(document).on('change', '#filterCountry', function () {
        $('#tahap3Table').DataTable().ajax.reload(null, true);
      });
    }
  });

  $('#stateModal').on('hidden.bs.modal', function () {
    $('#countryFieldID').val([]).trigger('change');
    resetModalForm('#createStateForm', '#validationErrorsBox');
  });
  $(document).on('click', '.edit-btn', function (event) {
    var id = $(event.currentTarget).data('id');
    renderData(id);
  });

  function renderData(id) {
    $.ajax({
      url: route('penilaian.edit', id),
      type: 'GET',
      success: function success(result) {
        $('#stateFieldId').val(result.data.id);
        $('#editName').val(result.data.name);

        $('#editCountryFieldID').val(result.data.indikator_id).trigger('change.select2');
        $('#editModal').modal('show');
      }
    });
  }

  $(document).on('submit', '#editStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#editSaveBtn');
    loadingButton.button('loading');
    var id = $('#stateFieldId').val();
    $.ajax({
      url: route('penilaian.update', id),
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
    var deleteStateUrl = route('penilaian.destroy', stateId);
    deleteItem(deleteStateUrl, '#tahap3Table', 'Item Pernyataan');
  });


  $(document).on('submit', '#createStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#saveBtn');
    loadingButton.button('loading');
    $.ajax({
      url: route('penilaian.store'),
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


});
/******/ })()
;
