@extends('layouts.app')
@section('title')
    Worklog
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
                        <h6 class="h2 text-white d-inline-block mb-0">Worklog</h6>
                    </div>
                    <div class="col-lg-6 col-6 text-right d-flex experience-alignment">
                        <div class="ml-auto text-center mr-3 custom_all_button mt-2rem">
                            {{ Form::select('status', $status, null, ['id' => 'filterStatus', 'class' => 'form-control', 'placeholder' => 'Filter Status']) }}

                        </div>
                        <div class="ml-1 text-center mr-3 custom_all_button mt-2rem">
                            {{ Form::select('project', $project, null, ['id' => 'filterProject', 'class' => 'form-control', 'placeholder' => 'Filter Project']) }}
                        </div>
                        <div class="mt-2rem custom_exp_button">
                            <a href="#" class="btn btn-group-lg btn-neutral custom-button-size" data-toggle="modal"
                                data-target="#stateModal">Tambah Worklog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container-fluid mt--6">
        <div class="card mb-4">
            <div class="card-body">
                <div class="table-responsive">

                    @include('pegawai.worklog.table')
                </div>
            </div>
        </div>
        @include('pegawai.worklog.create_modal')
        @include('pegawai.worklog.edit_modal')
        @include('pegawai.worklog.templates.templates')

    </div>
@endsection
@section('scripts')
    <script>
    </script>
    <script src="{{ asset('porto/assets/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('porto/assets/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('porto/assets/js/custom/custom-datatable.js') }}"></script>
    <script src="{{ asset('js/worklog/worklog.js') }}"></script>
@endsection
