-   Initialized the project
-   Install 'primeng', 'primeflex' and 'primeicons' (npm install primeng primeflex primeicons)
-   In the angular.json file, In the styles section, Add the primeng css files (for primgng and primeflex)
-   In the style.css file, Add the primeicons css
-   Check the primeng component is working properly.
    In the app.module.ts, Import the module and Add the module name on the imports section as well,
    (If the changes are not appear, Let's restart the application)
-   Add the card and table components
-   Add the todo data and passing to the table
-   Import FormsModule to use [(ngModel)] form component
-   Listen (onChange) event and update the list according to the change
-   Create an interface (ng g i todo) and Define the interface class
-   Create (onClick) event and pass the todo ID into the function
-   Add input component for add todo and Write the addTodo() function

-   Install json-server globally (npm i -g json-server)
-   Create the db.json file and add dummy data
-   run this command (json-server db.json --watch)
-   Create a service for connecting the backend (ng g s app) {in will create the service inside the app folder}
-   In app.service.ts, Connect to the backend using HttpClientModule
-   In app.module.ts, Import HttpClientModule from @angular/common/http
-   In app.service.ts, Import HttpClient from @angular/common/http
-   Create Get, Add, Update, Delete functions in services
-   Inject the services to the component file
-   Write the getList() function to fetch the data from the json-server
-   Write the addTodo() function to add the TODOs to the json-server
    To automatically update the list, call the getList() within the addTodo()
    If Todo is added, To clear the input field, Using @ViewChild with #todoTask of input field
-   Write the updateTodo() function similarly
-   Write the deleteTodo() function also similarly
