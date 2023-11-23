@extends('layouts.app')
@section('title')
    Project
@endsection
@section('css')
    <link href="{{ asset('assets/css/dataTables.bootstrap4.min.css') }}" rel="stylesheet" type="text/css"/>
@endsection
@section('content')
    <div class="header bg-primary pb-6">
        <div class="container-fluid">
            <div class="header-body">
                <div class="row align-items-center py-4 d-flex content-responsive">
                    <div class="col-lg-6 col-6 content-text">
                        <h6 class="h2 text-white d-inline-block mb-0">Project</h6>
                    </div>
                    <div class="col-lg-6 col-6 text-right d-flex experience-alignment">
                        <div class="ml-auto text-center mr-3 custom_all_button mt-2rem">
                            {{ Form::select('status', $status, null, ['id' => 'filterStatus', 'class' => 'form-control' ,'placeholder' => 'Filter Status']) }}

                        </div>

                        <div class="mt-2rem custom_exp_button">
                            <a href="#" class="btn btn-group-lg btn-neutral custom-button-size" data-toggle="modal"
                               data-target="#stateModal">Tambah Project</a>
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

                @include('pegawai.project.table')
                </div>
            </div>
        </div>
        @include('pegawai.project.create_modal')
        @include('pegawai.project.edit_modal')
        @include('pegawai.project.templates.templates')

    </div>
@endsection
@section('scripts')
<script>
    let message = '{{__('messages.select_country')}}';
</script>
    <script src="{{ asset('porto/assets/js/jquery.dataTables.min.js') }}"></script>
    <script src="{{ asset('porto/assets/js/dataTables.bootstrap4.min.js') }}"></script>
    <script src="{{ asset('porto/assets/js/custom/custom-datatable.js') }}"></script>
    <script src="{{ asset('js/project/project.js')}}"></script>
@endsection


