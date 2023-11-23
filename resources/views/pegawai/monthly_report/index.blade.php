@extends('layouts.app')
@section('title')
    Laporan Bulanan
@endsection
@section('css')
    <link href="{{ asset('assets/css/dataTables.bootstrap4.min.css') }}" rel="stylesheet" type="text/css" />
@endsection
@section('content')
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4 d-flex content-responsive">
                    <div class="col-lg-6 col-6 content-text">
                        <h6 class="h2 text-white d-inline-block mb-0">Laporan Bulanan</h6>
                    </div>
                    <div class="col-lg-6 col-6 text-right d-flex experience-alignment">

                        @role('HR')
                            <div class="ml-auto text-center mr-3 custom_all_button mt-2rem">
                                {{ Form::select('users', $users, null, ['id' => 'filterUsers', 'class' => 'form-control', 'placeholder' => 'Filter Pegawai']) }}
                            </div>
                        @endrole

                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid mt--6">
        <div class="card mb-4">
            <div class="card-body">
                <div class="table-responsive">

                    @include('pegawai.monthly_report.table')
                </div>
            </div>
        </div>


    </div>
@endsection
@section('scripts')
    <script></script>
    <script src="{{ asset('porto/assets/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('porto/assets/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('porto/assets/js/custom/custom-datatable.js') }}"></script>
    <script src="{{ asset('js/monthly/monthly.js') }}"></script>
@endsection
