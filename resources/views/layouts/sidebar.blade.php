<nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white custom_sidenav"
     id="sidenav-main">
    <div class="scrollbar-inner">
        <div class="close_icon_container">
            <div class="close_icon">
                <i class="fas fa-times"></i>
            </div>
        </div>
        <div class="sidenav-header align-items-center h-auto">
            <div class="navbar-brand custom-sidebar-logo d-flex justify-content-center align-items-center flex-column"
                 href="javascript:void(0)">
                <a href="" class="mb-2">
                    <img class="navbar-brand-img app-header-logo object-cover"
                         src="{{ asset('img/government.png') }}" width="60"
                         alt="Infyom Logo">
                </a>
                <?php
                $style = "style=";
                $width = 'width:';
                ?>
                <a href="{{ url('/') }}"
                   class="text-dark font-weight-bold custom_disabled_span text-wrap text-break" {{$style}} "{{$width}}
                150px;"></a>
            </div>
        </div>

        <div class="navbar-inner">
            <div class="collapse navbar-collapse" id="sidenav-collapse-main">
                <ul class="navbar-nav">

                    @include('layouts.menu')
                </ul>
            </div>
        </div>
    </div>
</nav>
