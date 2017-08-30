## Requirements

* node.js 6.x
* npm 4.x
* bower 1.8.x
* gulp-cli 1.4.x
* gulp 3.x

## Setup

Make sure you have all required packages installed:
```bash
npm install --global gulp gulp-cli bower
```
```bash
npm install
```
```bash
bower install
```

## Deployment

* Run `gulp serve` to preview and watch for change.
* Run `gulp` to build your webapp for production
* Run `gulp serve:dist` to preview the production build

Source files of application are in `/app` folder. 
Files for production build are created in `/dist` folder.