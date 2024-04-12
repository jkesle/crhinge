# Crhinge
Produces user match and various other statistics based on the JSON data provided by hinge when requested

## How to use
1. Navigate within the Hinge app to settings and locate the option to request your data. (will take a day or 2 for them to send it to you). In the data they send, a file "matches.json" will be included, its the one we're interested in
2. Install NodeJS: Windows -> https://nodejs.org/en/download. Linux -> use the package manager associated with your linux distro
3. Open PowerShell if on windows, or Terminal on Unix based OSes, and run the command:
```
   node hinge.js -m <path/to/your/matches.json>
```
