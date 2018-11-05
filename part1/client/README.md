# Part1

this is the sample page for this application. you can check actual sample page from the URL below.

https://nagase2.github.io/angular-first-project/part1/followers?page=1&order=asc


## Release to Github pages

### how to build 
exec command below
```
ng build --prod --base-href="https://nagase2.github.io/angular-first-project/part1"
```


### how to deploy onto github pages
exec command below
```
ngh
``` 


## Release to firebase
### how to deploy onto firebase 
exec the command below
```
ng build --prod && firebase deploy
```


## angular firebase's document 
https://github.com/angular/angularfire2/blob/master/docs/firestore/documents.md