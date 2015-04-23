- doc: https://atom.io/docs/v0.194.0/hacking-atom-package-word-count
- 
- downloading the pkg from github
- -------------------------------
- after downloading the atom package, copy it to ~/.atom/packages folder (/Users/Aarthi/.atom/packages) and delete the pkg folder from local repo.
- do a symlink of the pkg in !/.atom/packages folder to github local repo folder
   pax -rwl ~/.atom/packages/sqldb-pkg/* /Users/Aarthi/GitHub/atom/
- open the local repo pkg folder in atom editor and do View->Reload and start editing it.
