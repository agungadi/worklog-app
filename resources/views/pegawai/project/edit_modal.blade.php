<div class="modal fade pr-0" id="editModal" tabindex="-1" role="dialog" aria-labelledby="countryModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="countryModalLabel">Edit Project</h5>
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
                        {{ Form::label('Title Project :') }}<span class="text-danger">*</span>
                        {{ Form::text('title', null, ['class' => 'form-control', 'required', 'placeholder' => 'Title', 'id' => 'ediTitle']) }}
                    </div>



                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('status', 'Pilih Status :') }}<span class="text-danger">*</span>
                        <?php
                        $statusOptions = [
                            'running' => 'running',
                            'completed' => 'completed',
                        ];
                        ?>
                        {{ Form::select('status', $statusOptions, null, ['class' => 'form-control', 'required', 'id' => 'editstatus', 'placeholder' => 'Pilih Status']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('start_date', 'Start Date :') }}
                        <span class="text-danger">*</span>
                        {{ Form::date('start_date', null, ['class' => 'form-control', 'required', 'id' => 'editStart']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('due_date', 'Due Date :') }}
                        <span class="text-danger">*</span>
                        {{ Form::date('due_date', null, ['class' => 'form-control', 'required', 'id' => 'editDue']) }}
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
