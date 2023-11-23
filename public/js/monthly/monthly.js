/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
    var __webpack_exports__ = {};
    /*!**********************************************!*\
      !*** ./resources/assets/js/states/states.js ***!
      \**********************************************/


    $(document).ready(function () {

        $('#filterUsers').select2({
            width: '170px'
        });

        var tablename = $('#monthlyTable');
        tablename.DataTable({
            deferRender: true,
            scroller: true,
            processing: true,
            serverSide: true,
            'order': [[0, 'asc']],
            ajax: {
                url: route('monthly.index'),
                data: function data(_data) {
                    _data.users = $('#filterUsers').find('option:selected').val();
                },
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
                data: 'formatted_month_year',
                name: 'formatted_month_year'
            }, {
                data: 'total_poin_daily',
                name: 'total_poin_daily'
            }
                , {
                data: 'total_poin_monthly',
                name: 'total_poin_monthly'
            },
            {
                data: 'total_jam_worklogs',
                name: 'total_jam_worklogs'
            },
            {
                data: 'total_presence',
                name: 'total_presence'
            },
            {
                data: 'total_absence',
                name: 'total_absence'
            },
        ],
            'fnInitComplete': function fnInitComplete() {
                $(document).on('change', '#filterUsers', function () {
                    console.log('Selected value:', $('#filterUsers').val());

                    $('#monthlyTable').DataTable().ajax.reload(null, true);
                });
            }
        });
    });
    /******/
})()
    ;
