

## About Worklog

Role HR :
-  Mengelola pegawai
-  Melihat Report Harian pada worklog setiap pegawai menggunakan fitur filter pegawai.
-  Melihat Report Bulanan pada worklog setiap pegawai menggunakan fitur filter pegawai.

Role Pegawai :
- Mengelola worklog
- Mengelola Project
- Melihat history/laporan harian worklog
- Melihat history/laporan bulanan worklog

Status worklog :
- todo = worklog dilakukan nanti (poin belum bertambah)
- in_progress = worklog sedang dikerjakan (poin belum bertambah)
- complete = worklog telah selesai dikerjakan (poin bertambah)

## Penjelasan Report
- Report daily menammpilkan total jumlah jam kerja dan poin yang diperolah tiap hari dari jam_kerja/8.
- Report monthly menampilkan jumlah poin jam kerja selama sebulan, total poin hadir/presensi kerja, total jam kerja selama sebulan, total kehadiran/presensi selama sebulan, total absen/tidak masuk kerja selaam sebulan.
- poin total hadir selama sebulan didapat dari jumlah_masuk_kerja/20

## addition JWT API
Jalankan pada Postman :
- Login = 127.0.0.1:8000/api/login
- data user = = 127.0.0.1:8000/api/getuser
- Melihat worklog + 127.0.0.1:8000/api/myworklog



