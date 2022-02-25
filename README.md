# sample

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Encrypted and Decrypted password with BASE64
#### An array structure, with each object being a username and password. Example:
[
{“username”: “joaosilva”, “password”: “abcdefghijk”},
{“username”: “alexsilva”, “password”: “hhhhhhhhh”},
...
]
#### The password will be encrypted, using its own logic.
#### The challenge is to build an application in JavaScript (request via Ajax) or in VueJS, which presents two input inputs, one for the user and one for the password. The system must consume the file mentioned above, perform the encryption of the password entered, and compare it with the data in the file.
#### If the entry exists, the system should present a screen, listing the file's data, in a table with 3 columns. The username, password and decrypted password.
#### If there is no entry, the system should show an alert on the screen, indicating the error.
#### The logic for password encryption is as follows:
#### • With the password entered, get the ascii code of each character, and multiply it by 57.
#### • Concatenate this multiplication into a result variable, with the addition of a pipe
#### at the end “|” (without the quotes)
#### • Base64 the result.
#### Example:
#### Entered password: “aaa”;
#### Password before base64 = “5529|5529|5529|”;
#### Password after base64 (saved in JSON file) = “NTUyOXw1NTI5fDU1Mjl8”;
