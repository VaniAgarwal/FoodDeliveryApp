# Food Delivery App-NamasteReact

# COnfiguring NPM
-- npm init
--- test command use "jest"

# What is NPM?


# package.json?
package.json is a configuration for npm. Basically gives the dependencies.

# Bundlers in react?
Vite,Parcel,webpack are the bundlers.These are basically liberaries.
A tool that allows developers to package their code into a single file or bundle. This bundle can then be used to run the application in the browser. Bundlers are used to reduce the size of the code and improve the performance of the application. "create-react-app" uses webpack bundler behind the scenes. But we will be using parcel.

# Getting parcel/any dependency or any package into our app
-- npm install -D parcel
-- npx parcel index.html  //to start the server instead of this we can create a scripts in package.json [npm run start]
-- npm install react
-- npm install react-dom

# Parcel

-Dev Build
-Local Server
-HMR => Hot Module Replacement
-File Watching Algorithm - written in c++
-Catching-for faster builts
-Image optimization
-Minification
-Bundeling
-Compressing
-consistent Hashing
-Code Splitting
-Differential Bundling - support older browser
-Diagnostic
-Error Handling
-Https
-Tree Shaking => Removed unused code
-Different Dev and Production Bundle

# How to do a production built?
-npx parcel build index.html //to build the project instead of this we can create a scripts in package.json [npm run build]
-remove "main" from package.json

## Never keep a hardcoded in any component folder.

## Two types of export named export and default export.

-Default export
--export default component
--import component from path

-Named export
--export const component
--import {component} from path

## Whenever you change the local state variable react re-renders the component.

## Never use useState hook inside a condition , INSIDE A FOR LOOP, inside a function.

## Try to keep useStae on the top. 

# Redux Toolkit
    -Install @reduxjs/toolkit and react-redux
    -Build our store
    -connect our store to our app
    -we will create a cart slice
    -dispatch(action)
    -we will subscribe to our store using selector





