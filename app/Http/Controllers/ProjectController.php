<?php

namespace App\Http\Controllers;

use App\DataTable\ProjectDataTable;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Worklog;
use App\Models\Project;

use Yajra\DataTables\DataTables;

class ProjectController extends AppBaseController
{
    //
    public function index(Request $request)
    {
        $status = Project::distinct('status')->pluck('status', 'status');

        // $idUser = Auth::user()->id;

        if ($request->ajax()) {
            return DataTables::of((new ProjectDataTable())->get($request->only(['status'])))->make(true);
        }

        return view('pegawai.project.index', compact('status'));
    }

    public function create()
    {
        // Logika untuk menampilkan formulir pembuatan tugas
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'status' => 'required',
            'start_date' => 'required',
            'due_date' => 'required',
        ]);


        $project = new Project();
        $project->name_project = $request->get('title');
        $project->status = $request->get('status');
        $project->start_date =  date('Y-m-d', strtotime($request->get('start_date')));
        $project->due_date = date('Y-m-d', strtotime($request->get('due_date')));
        $project->user_id = Auth::user()->id;

        $project->save();

        return $this->sendResponse($project, 'Project berhasil disimpan.');
    }

    public function show($id)
    {
        // Logika untuk menampilkan detail tugas dengan ID tertentu
    }

    public function edit(Project $id)
    {
        return $this->sendResponse($id, 'Worklog  successfully retrieved.');
    }

    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required',
            'status' => 'required',
            'start_date' => 'required',
            'due_date' => 'required',
        ]);

        $project = Project::find($id);
        $project->name_project = $request->get('title');
        $project->status = $request->get('status');
        $project->start_date =  date('Y-m-d', strtotime($request->get('start_date')));
        $project->due_date = date('Y-m-d', strtotime($request->get('due_date')));


        $project->save();

        return $this->sendResponse($project, 'Project berhasil diubah.');
    }

    public function destroy($id)
    {
        $WorklogModels = [
            Worklog::class
        ];

        $result = $this->canDelete($WorklogModels, 'project_id', $id);

        if ($result) {
            return $this->sendError('Project can\'t be deleted.');
        }

        Project::find($id)->delete();

        return $this->sendSuccess('Project berhasil dihapus.');
    }

    public function canDelete($models, $foreignColumn, $id)
    {
        foreach ($models as $model) {
            $result = $model::where($foreignColumn, $id)->exists();

            if ($result) {
                return true;
            }
        }

        return false;
    }
}
