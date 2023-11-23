<div class="modal fade p-0" id="stateModal" tabindex="-1" role="dialog" aria-labelledby="stateModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="stateModalLabel">{{__('messages.user.tambah')}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="alert-danger alert d-none" id="validationErrorsBox"></div>
                {{ Form::open(['id' =>'createStateForm','method'=>'post']) }}
                <div class="row">
                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('name', 'Nama :') }}<span class="text-danger">*</span>
                        {{ Form::text('name', null , ['class' => 'form-control','required','placeholder' => __('messages.user.user'),'id'=>'stateName']) }}
                    </div>
                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('country_id','Pilih Divisi :') }}<span
                                class="text-danger">*</span>
                        {{ Form::select('unit_divisi', $divisi, null, ['class' => 'form-control','required', 'id' => 'createopd', 'placeholder' => 'Pilih Divisi']) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('roles',' Roles :') }}<span
                                class="text-danger">*</span>
                        {{ Form::select('roles', $roles, null, ['class' => 'form-control','required', 'id' => 'createrole', 'placeholder' => __('messages.role.pilih')]) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('email', __('messages.email').':') }}<span class="text-danger">*</span>
                        {{ Form::email('email', null, ['class' => 'form-control', 'required', 'placeholder' => __('messages.enter_email')]) }}
                    </div>

                    <div class="form-group col-lg-12 col-sm-12">
                        {{ Form::label('username', __('messages.user.username').':') }}<span class="text-danger">*</span>
                        {{ Form::text('username', null , ['class' => 'form-control','required','placeholder' => __('messages.user.username'),'id'=>'stateName']) }}
                    </div>

                <div class="col-md-6">
                    <div class="form-group">

                        {{ Form::label('password', 'Password:') }}<span class="text-danger">*</span>
                        {{ Form::password('password', ['class' => 'form-control','required','min' => '6','max' => '20','placeholder'=>'Enter Password']) }}
                        </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        {{ Form::label('password_confirmation', 'Confirmation Password:') }}<span class="text-danger">*</span>
                        {{ Form::password('password_confirmation', ['class' => 'form-control','required','min' => '6','max' => '20', 'placeholder'=>'Enter Confirm Password']) }}
                    </div>
                </div>

                </div>
                <div class="d-flex align-items-center">
                    {{ Form::button(__('messages.save'), ['type' => 'submit', 'class' => 'btn btn-primary', 'id' => 'saveBtn', 'data-loading-text' => "<span class='spinner-border spinner-border-sm'></span> Processing..."]) }}
                    {{ Form::button(__('messages.cancel'), ['type' => 'button', 'class' => 'btn btn-light text-dark','data-dismiss'=>'modal']) }}
                </div>
                {{ Form::close() }}
            </div>
        </div>
    </div>
</div>
