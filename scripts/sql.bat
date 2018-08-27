cd %~dp0
color b
start cmd /k CALL sql_server.bat
timeout 4 /nobreak
start cmd /k CALL sql_start.bat