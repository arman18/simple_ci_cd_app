const express = require('express')
const app = express();
const port = process.env.port || 8000;
app.get('/add', function (req, res) {
    let result = Number(req.query.num1)+Number(req.query.num2);
    res.write(result.toString());
    res.end();
})

app.listen(port,function(error){
    //if(error) console.log("An error occured");
    //else console.log("Running server on port 3000");
});
module.exports = app
/*
Requirements:
    1. install node and npm
    2. install visual studio code
    3. chrome
build app:
    1. run: npm init -y
    2. run: npm i express
    3. create app.js add content
    4. make sure adding export for using testing purpose
    4. run: node app.js
    5. open browser and hit: http://localhost:3000/add?num1=10&num2=5
    6. 
Add testing:
    1. npm install mocha supertest --save-dev
    2. create test/test.js and add content
    3. modify package.json test script
    4. run: npm test
push to github
    1. create .gitignore and add node_modules folder name inside
    2. create github repository with name simple_ci_cd without readme
    3. push all to github

Set up CI(GitHub Actions):
    1. nevigate github repository
    2. click actions > new workflow
    3. choose a workflow suggested by github and commit it
    4. nevigate action page again then will see that test is executing.
Set up CD(heroku):
    1. register heroku
    2. paste code
    3. create app
    4. git pull
    5. add 



*/