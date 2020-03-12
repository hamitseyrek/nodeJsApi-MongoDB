const app = require('./app');
require('./connection');

async function init() {
    await app.listen(3000);
    console.log("Server on location: 3000");
}
// module.exports=app;
init();