

@role('Pegawai')
<li class="nav-item side-menus {{ Request::is('home*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('dashboard') }}">
        <i class="fas fa-tachometer-alt big_size_icon  "></i>
        <span class="nav-link-text custom_disabled_span">Home</span>
    </a>
</li>
<li class="nav-item side-menus {{ Request::is('worklog*') || Request::is('worklog*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('worklog.index') }}">
        <i class="fas fa-tasks big_size_icon"></i>
        <span class="nav-link-text custom_disabled_span">My Worklog</span>
    </a>
</li>
<li class="nav-item side-menus {{ Request::is('project*') || Request::is('project*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('project.index') }}">
        <i class="fas fa-thumbtack big_size_icon"></i>
        <span class="nav-link-text custom_disabled_span">My Project</span>
    </a>
</li>

<li class="nav-item side-menus {{ Request::is('daily*') || Request::is('daily*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('daily.index') }}">
      <i class="fas fa-history big_size_icon" aria-hidden="true"></i>
        <span class="nav-link-text custom_disabled_span">Report Harian</span>
    </a>
</li>

<li class="nav-item side-menus {{ Request::is('monthly*') || Request::is('monthly*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('monthly.index') }}">
        <i class="fas fa-calendar big_size_icon" aria-hidden="true"></i>
        <span class="nav-link-text custom_disabled_span">Report Bulanan</span>
    </a>
</li>

@endrole

@role('HR')
<li class="nav-item side-menus {{ Request::is('dashboard*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('dashboard') }}">
        <i class="fas fa-tachometer-alt big_size_icon  "></i>
        <span class="nav-link-text custom_disabled_span">{{__('messages.dashboard.dashboard')}}</span>
    </a>
</li>
<li class="nav-item side-menus {{ Request::is('users*') || Request::is('user*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('users.index') }}">
        <i class="fas fa-users big_size_icon   "></i>
        <span class="nav-link-text custom_disabled_span">Pegawai</span>
    </a>
</li>

<li class="nav-item side-menus {{ Request::is('daily*') || Request::is('daily*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('daily.index') }}">
      <i class="fas fa-history big_size_icon" aria-hidden="true"></i>
        <span class="nav-link-text custom_disabled_span">Report Harian</span>
    </a>
</li>

<li class="nav-item side-menus {{ Request::is('monthly*') || Request::is('monthly*') ? 'active':''}}">
    <a class="nav-link" href="{{ route('monthly.index') }}">
        <i class="fas fa-calendar big_size_icon" aria-hidden="true"></i>
        <span class="nav-link-text custom_disabled_span">Report Bulanan</span>
    </a>
</li>
@endrole

