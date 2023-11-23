<nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
    <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto d-xl-none">
                <li class="nav-item">
                    <!-- Sidenav toggler -->
                    <div class="pr-3 admin_menu_icon" data-action="sidenav-pin"
                         data-target="#sidenav-main">
                        <div class="toggle_line">
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="navbar-nav mr-auto d-xl-block d-none">
                <li class="nav-item">
                    {{-- desktop screen--}}
                    <div class="pr-3 desktop_admin_menu_icon">
                        <div class="toggle_line">
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                            <i class="sidenav-toggler-line"></i>
                        </div>
                    </div>
                </li>
            </ul>
            @if(session('impersonated_by'))
                <a href="{{ route('impersonate.leave') }}"
                   class="mr-3 text-danger" data-toggle="tooltip"
                   title="{{__('messages.admin_users.return_to_admin')}}">
                    <i class="fas fa-user-check font-size-25px"></i>
                </a>
            @endif
            @role('admin')
            <a href="{{ url('p'.DIRECTORY_SEPARATOR.Auth::user()->username) }}"
               class="mr-3 text-danger" target="_blank" data-toggle="tooltip"
               title="{{__('messages.user.preview_blog')}}">
                <i class="fas fa-eye font-size-25px"></i>
            </a>
            @endrole
            <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
                <li class="dropdown language-menu no-hover mr-2">

                        <i class="fa fa-cog text-primary font-size-25px"></i>
                    </a>
                </li>

                <li class="nav-item dropdown" >
                    <a class="nav-link pr-0" id="showdropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                       >
                        <div class="media align-items-center">
                  <span class="avatar avatar-sm rounded-circle">
                    <img alt="Image placeholder" src="{{ asset('img/person.png') }}" class="bg-white">
                  </span>
                            <div class="media-body  ml-2  d-none d-lg-block">
                                <span class="mb-0 text-sm text-dark font-weight-bold">{{__('messages.user.hi')}},&nbsp;&nbsp;{{Auth::user()->name }}</span>
                            </div>
                        </div>
                    </a>
                    <div class="dropdown-menu  dropdown-menu-right">
                        <div class="dropdown-header noti-title">
                            <h6 class="text-overflow m-0">{{__('messages.user.welcome')}},&nbsp;&nbsp;{{Auth::user()->name }}</h6>
                        </div>

                        @if(session('impersonated_by'))
                            <a class="dropdown-item" href="{{ route('impersonate.leave') }}">
                                <i class="fas fa-user-check"></i>{{__('messages.admin_users.return_to_admin')}}</a>
                        @endif
                        <div class="dropdown-divider"></div>
                        <a href="{{ url('logout') }}" class="dropdown-item"
                           onclick="event.preventDefault(); localStorage.clear();  document.getElementById('logout-form').submit();">
                            <i class="ni ni-button-power"></i>
                            <span>{{__('messages.user.logout')}}</span>
                        </a>
                        <form id="logout-form" action="{{ url('/logout') }}" method="POST" class="d-none">
                            {{ csrf_field() }}
                        </form>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
