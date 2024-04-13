$executingScriptDir = Split-Path -Path $MyInvocation.MyCommand.Definition -Parent
$jsonPath = Join-Path $executingScriptDir "your_matchesjson_here/matches.json"
$scriptPath = Join-Path $executingScriptDir "hinge.js"

node $scriptPath -m $jsonPath
Pause