Prerequisites :
JavaScript
HTML
CSS
Node.js => To check your version :: node -v
        => npm package manager ( Angular, the Angular CLI, and Angular apps depend on features and functionality provided by libraries that            are available as npm packages ) :: run npm -v

Step 1: npm install -g @angular/cli => Install the Angular CLI

Step 2: ng new my-app => Create a workspace and initial application

Step 3: ng serve --open => Run the application
      ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.
      --open (or just -o) option automatically opens your browser to http://localhost:4200/.
    
    
## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
