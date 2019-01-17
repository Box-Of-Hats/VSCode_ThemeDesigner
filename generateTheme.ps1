Param(
    [Parameter(Mandatory = $true)] [Array] $Colours,
    [Parameter(Mandatory = $true)] [string] $Template
)
<#
Colours should be an array with elements ranging from darkest to lightest, with exception of the final elemnt, which is an accent.
e.g
$colours = ("#141A18", "#1D2725", "#30423F", "#FFD3F1", "#EFEFEF", "#FFD3F1")
#>

#region Arg checks
if ($Colours.Count -ne 6) {
    Write-Host ("6 colours are required, received {0}" -f $Colours.Count)
    exit
} 
if (-not (Test-Path $Template)) {
    Write-Host "Could not find file: $Template"
    exit
}
#endregion

$templateContents = Get-Content $Template
$theme = $templateContents

for ($i = 0; $i -lt $colours.Count; $i++) {
    $colour = $colours[$i]
    $theme = $theme.Replace("@$i", $colour);
}

return $Theme