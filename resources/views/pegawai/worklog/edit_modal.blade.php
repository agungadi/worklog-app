<div class="modal fade pr-0" id="editModal" tabindex="-1" role="dialog" aria-labelledby="countryModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="countryModalLabel">Edit Log</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="alert-danger alert d-none" id="editValidationErrorsBox"></div>
                {{ Form::open(['id' => 'editStateForm', 'method' => 'post']) }}
                {{ Form::hidden('id', null, ['id' => 'stateFieldId']) }}
                <div class="row">
                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('Title :') }}<span class="text-danger">*</span>
                        {{ Form::text('title', null, ['class' => 'form-control', 'required', 'placeholder' => 'Title', 'id' => 'ediTitle']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('deskripsi', 'Deskripsi :') }}<span class="text-danger">*</span>
                        {{ Form::text('deskripsi', null, ['class' => 'form-control', 'required', 'placeholder' => 'Deksripsi', 'id' => 'editDeskripsi']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('project_id', 'Project :') }}<span class="text-danger">*</span>
                        {{ Form::select('project_id', $project, null, ['class' => 'form-control', 'required', 'id' => 'editProject', 'placeholder' => 'Project']) }}
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
                        {{ Form::select('status', $statusOptions, null, ['class' => 'form-control', 'required', 'id' => 'editstatus', 'placeholder' => 'Pilih Status']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('tanggal', 'Tanggal :') }}
                        <span class="text-danger">*</span>
                        {{ Form::date('tanggal', null, ['class' => 'form-control', 'required', 'id' => 'editTanggal']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('lokasi', 'Lokasi Pengerjaan:') }}<span class="text-danger">*</span>
                        {{ Form::text('lokasi', null, ['class' => 'form-control', 'required', 'placeholder' => 'Lokasi Pengerjaan', 'id' => 'editlokasi']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        <div class="d-flex">
                            <div class="mr-2">
                                {{ Form::label('waktu', 'Waktu Lama Pengerjaan (Jam) :') }}
                                <span class="text-danger">*</span>
                                {{ Form::selectRange('waktu', 0, 24, null, ['class' => 'form-control', 'required', 'id' => 'editwaktu', 'placeholder' => 'Pilih Lama Waktu Pengerjaan']) }}

                            </div>


                        </div>
                    </div>

                </div>
                <div class="d-flex align-items-center">
                    {{ Form::button('Save', ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'editSaveBtn', 'data-loading-text' => "<span class='spinner-border spinner-border-sm'></span> Processing..."]) }}
                    {{ Form::button('Cancel', ['type' => 'button', 'class' => 'btn btn-light text-dark', 'data-dismiss' => 'modal']) }}
                </div>
                {{ Form::close() }}
            </div>
        </div>
    </div>
</div>
