<div class="modal fade pr-0" id="editModal" tabindex="-1" role="dialog" aria-labelledby="countryModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="countryModalLabel">Edit User</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="alert-danger alert d-none" id="editValidationErrorsBox"></div>
                {{ Form::open(['id' =>'editStateForm','method'=>'post']) }}
                {{ Form::hidden('id', null, ['id' => 'stateFieldId']) }}
                <div class="row">
                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('Name :') }}<span class="text-danger">*</span>
                        {{ Form::text('name', null , ['class' => 'form-control','required','placeholder' => 'Tahap 1','id'=>'editName']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('country_id',__('messages.user.opd').':') }}<span
                                class="text-danger">*</span>
                        {{ Form::select('unit_divisi', $divisi, null, ['class' => 'form-control','required', 'id' => 'editdivisi', 'placeholder' => 'Pilih Divisi']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('country_id',__('messages.user.roles').':') }}<span
                                class="text-danger">*</span>
                        {{ Form::select('roles', $roles, null, ['class' => 'form-control','required', 'id' => 'editroles', 'placeholder' => __('messages.tahap3.select_tahap3')]) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('email', __('messages.email').':') }}<span class="text-danger">*</span>
                        {{ Form::email('email', null, ['class' => 'form-control', 'required', 'id' => 'editemail', 'placeholder' => __('messages.enter_email')]) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('username', __('messages.user.username').':') }}<span class="text-danger">*</span>
                        {{ Form::text('username', null , ['class' => 'form-control','required', 'id' => 'editusername', 'placeholder' => __('messages.user.username')]) }}
                    </div>



                </div>
                <div class="d-flex align-items-center">
                    {{ Form::button('Save', ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'editSaveBtn', 'data-loading-text' => "<span class='spinner-border spinner-border-sm'></span> Processing..."]) }}
                    {{ Form::button('Cancel', ['type' => 'button', 'class' => 'btn btn-light text-dark','data-dismiss'=>'modal']) }}
                </div>
                {{ Form::close() }}
            </div>
        </div>
    </div>
</div>

