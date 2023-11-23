<div class="modal fade p-0" id="stateModal" tabindex="-1" role="dialog" aria-labelledby="stateModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="stateModalLabel">Tambah Log</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="alert-danger alert d-none" id="validationErrorsBox"></div>
                {{ Form::open(['id' => 'createStateForm', 'method' => 'post']) }}
                <div class="row">
                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('title', 'title :') }}<span class="text-danger">*</span>
                        {{ Form::text('title', null, ['class' => 'form-control', 'required', 'placeholder' => 'Title', 'id' => 'title']) }}
                    </div>
                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('deskripsi', 'Deskripsi :') }}<span class="text-danger">*</span>
                        {{ Form::text('deskripsi', null, ['class' => 'form-control', 'required', 'placeholder' => 'Deksripsi', 'id' => 'deskripsi']) }}
                    </div>
                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('project_id', 'Project :') }}<span class="text-danger">*</span>
                        {{ Form::select('project_id', $project, null, ['class' => 'form-control', 'required', 'id' => 'createProject', 'placeholder' => 'Project']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('status', 'Pilih Status :') }}<span class="text-danger">*</span>
                        <?php
                        // Buat array pilihan status
                        $statusOptions = [
                            'todo' => 'todo',
                            'in_progress' => 'in progress',
                            'complete' => 'complete',
                            'absen' => 'absen',
                        ];
                        ?>
                        {{ Form::select('status', $statusOptions, null, ['class' => 'form-control', 'required', 'id' => 'createstatus', 'placeholder' => 'Pilih Status']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('tanggal', 'Tanggal :') }}
                        <span class="text-danger">*</span>
                        {{ Form::date('tanggal', null, ['class' => 'form-control', 'required', 'id' => 'createTanggal']) }}
                    </div>


                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('lokasi', 'Lokasi Pengerjaan:') }}<span class="text-danger">*</span>
                        {{ Form::text('lokasi', null, ['class' => 'form-control', 'required', 'placeholder' => 'Lokasi Pengerjaan', 'id' => 'lokasi']) }}
                    </div>
                    <div class="form-group col-lg-12 col-sm-12">
                        <div class="d-flex">
                            <div class="mr-2">
                                {{ Form::label('waktu', 'Waktu Lama Pengerjaan (Jam) :') }}
                                <span class="text-danger">*</span>
                                {{ Form::selectRange('waktu', 0, 24, null, ['class' => 'form-control', 'required', 'id' => 'waktu', 'placeholder' => 'Pilih Lama Waktu Pengerjaan']) }}

                            </div>


                        </div>
                    </div>


                </div>
                <div class="d-flex align-items-center">
                    {{ Form::button(__('messages.save'), ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'saveBtn', 'data-loading-text' => "<span class='spinner-border spinner-border-sm'></span> Processing..."]) }}
                    {{ Form::button(__('messages.cancel'), ['type' => 'button', 'class' => 'btn btn-light text-dark', 'data-dismiss' => 'modal']) }}
                </div>
                {{ Form::close() }}
            </div>
        </div>
    </div>
</div>
