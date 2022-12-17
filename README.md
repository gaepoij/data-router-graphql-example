# data-router-graphql-example
Example how to use react routers new data router with apollo graphql client



# Install
```
npm install
```

# Run locally 
```
npm run dev
```


This example includes one route. Check src/main.tsx to see how it is defined. Uses new 6.4.3 introduced createBrowserRouter to create data router. 
The route has `action` and `loader`.  Loader function defines what is loaded before Route renders. Action is function that will be run when write 
operation happens in the route. Ex. form submit. 

Check
src/createNew.tsx action and loader functions. 

Also check how the component utilizes them by using hooks provided by react-router.
