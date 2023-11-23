/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************************!*\
  !*** ./resources/assets/js/states/states.js ***!
  \**********************************************/


$(document).ready(function () {
  $('#countryFieldID,#editCountryFieldID').select2({
    'width': '100%',
    'placeholder': 'Pilih Pernyataan'
  });
  $('#filterCountry').select2({
    width: '170px'
  });
  $('#jenisjawaban').select2({
    'width': '100%',
    'placeholder': 'Pilih Jenis Jawaban'
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
      url: route('penjelasan.index'),
      data: function data(_data) {
        _data.pernyataan_id = $('#filterCountry').find('option:selected').val();
      }
    },
    columnDefs: [{
      'targets': [4],
      'width': '8%',
      'orderable': false,
      'className': 'text-center action-table-btn'
    },
    {
        'targets': [1],
        'width': '8%',
        'className': 'text-center action-table-btn'
      },
      {
        'targets': [2],
        'width': '8%',
        'className': 'text-center action-table-btn'
      },
      {
        'targets': 3,
        'visible': false,
      },
    {
        render: function (data) {
            return "<div class='text-wrap width-400'>" + data + "</div>";
        },
        targets: 0
    },
    {
        render: function (data) {
            return "<div class='text-wrap width-200'>" + data + "</div>";
        },
        targets: 3
    },
    {
      targets: '_all',
      defaultContent: 'N/A'
    }],
    columns: [{
      data: 'name',
      name: 'name'
    },{
        data: 'jawaban',
        name: 'jawaban'
      },
      {
        data: 'nilai',
        name: 'nilai'
      }, {
      data: 'penilaian.name',
      name: 'pernyataan_id'
    }, {
      data: function data(row) {
        var url = route('penjelasan.edit', row.id);
        var data = [{
          'id': row.id,
          'url': url
        }];
        return prepareTemplateRender('#statesTemplate', data);
      },
      name: 'id'
    }],

    order: [[3, 'asc']],
    drawCallback: function (settings) {
        var api = this.api();
        var rows = api.rows({ page: 'current' }).nodes();
        var last = null;

        api
            .column(3, { page: 'current' })
            .data()
            .each(function (group, i) {
                if (last !== group) {
                    $(rows)
                        .eq(i)
                        .before('<tr class="group" ><td colspan="5">[Pernyataan] ' + group + '</td></tr>');

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
  $(document).on('submit', '#createStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#saveBtn');
    loadingButton.button('loading');
    $.ajax({
      url: route('penjelasan.store'),
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
    $('#countryFieldID').val([]).trigger('change');
    $('#jenisjawaban').val([]).trigger('change');

    // resetModalForm('#createStateForm', '#validationErrorsBox');
  });

  $(document).on('click', '#createModal', function (event) {
    $('.selectJumlah').empty();
    resetModalForm('#stateModal');

  });


  $(document).on('click', '.edit-btn', function (event) {
    var id = $(event.currentTarget).data('id');
    renderData(id);
  });




  function renderData(id) {
    $.ajax({
      url: route('penjelasan.edit', id),
      type: 'GET',
      success: function success(result) {
        if(result.data.jenis_jawaban == "Pilihan Ganda"){
            $('.selectJumlah').empty();
        }else{
            $('.selectJumlah').empty();
            $('.selectJumlah').append(`<label>Pilih Jumlah <span class="text-danger">*</span></label>
            <div class="form-field">
                <i class="icon icon-arrow-down3"></i>
                <select name="jumlah" id="jumlah" class="form-control">
                    <option value="Jumlah dapat diubah">Jumlah dapat diubah</option>
                    <option value="Jumlah tidak dapat diubah">Jumlah tidak dapat diubah</option>
                </select>
            </div>`);
        }
        $('#stateFieldId').val(result.data.id);
        $('#editName').val(result.data.name);
        $('#editJawaban').val(result.data.jawaban);
        $('#editNilai').val(result.data.nilai);
        $('#editCountryFieldID').val(result.data.pernyataan_id).trigger('change.select2');
        $('#editjenis').val(result.data.jenis_jawaban).trigger('change.select2');
        $('#jumlah').val(result.data.jumlah).trigger('change.select2');
        $('#editModal').modal('show');


      }
    });
  }

  $("#editjenis").change(function () {
    if($("#editjenis option:selected").val() == "Persentase"){
        $('.selectJumlah').empty();

        $('.selectJumlah').append(`<label>Pilih Jumlah <span class="text-danger">*</span></label>
        <div class="form-field">
            <i class="icon icon-arrow-down3"></i>
            <select name="jumlah" id="jumlah" class="form-control">
                <option value="Jumlah dapat diubah">Jumlah dapat diubah</option>
                <option value="Jumlah tidak dapat diubah">Jumlah tidak dapat diubah</option>
            </select>
        </div>`);
    }else{

        $('.selectJumlah').empty();
    }
    });

  $("#jenisjawaban").change(function () {
    if($("#jenisjawaban option:selected").val() == "Persentase"){
        $('.selectJumlah').empty();

        $('.selectJumlah').append(`<label>Pilih Jumlah <span class="text-danger">*</span></label>
        <div class="form-field">
            <i class="icon icon-arrow-down3"></i>
            <select name="jumlah" id="jumlah" class="form-control">
                <option value="Jumlah dapat diubah">Jumlah dapat diubah</option>
                <option value="Jumlah tidak dapat diubah">Jumlah tidak dapat diubah</option>
            </select>
        </div>`);
    }else{

        $('.selectJumlah').empty();
    }
    });

  $(document).on('submit', '#editStateForm', function (e) {
    e.preventDefault();
    var loadingButton = jQuery(this).find('#editSaveBtn');
    loadingButton.button('loading');
    var id = $('#stateFieldId').val();
    $.ajax({
      url: route('penjelasan.update', id),
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
    var deleteStateUrl = route('penjelasan.destroy', stateId);
    deleteItem(deleteStateUrl, '#tahap3Table', 'Jawaban');
  });
});
/******/ })()
;
