param(
    [Parameter(Mandatory = $true)]
    [string]$Extension,
    [string]$Output,
    [string]$Server = $env:VBOOK_SERVER
)

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$extensionPath = Join-Path $root $Extension
$cli = Join-Path $root '.agents\skills\vbook-extensions\scripts\vbook.js'
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$node = if ($nodeCommand) { $nodeCommand.Source } else { $null }

if (-not $node) {
    $nodeCandidates = @(
        (Join-Path $env:ProgramFiles 'nodejs\node.exe'),
        (Join-Path $env:LOCALAPPDATA 'Programs\nodejs\node.exe')
    )
    foreach ($candidate in $nodeCandidates) {
        if (Test-Path -LiteralPath $candidate) {
            $node = $candidate
            break
        }
    }
}

if (-not $node) {
    Write-Error 'Node.js was not found. Add node.exe to PATH or install it from https://nodejs.org/'
    exit 1
}

if (-not (Test-Path -LiteralPath (Join-Path $extensionPath 'plugin.json'))) {
    Write-Error "Extension manifest not found: $Extension\plugin.json"
    exit 1
}

if (-not $Output) {
    $Output = Join-Path $extensionPath 'plugin.zip'
}
elseif (-not [System.IO.Path]::IsPathRooted($Output)) {
    $Output = Join-Path $root $Output
}

$arguments = @(
    $cli,
    'build',
    $Extension,
    $Output
)

if ($Server) {
    $arguments += @('--server', $Server)
}

Push-Location $root
try {
    & $node @arguments
    exit $LASTEXITCODE
}
finally {
    Pop-Location
}
