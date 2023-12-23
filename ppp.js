function y()
{
    console.log("function before callback");
    while(true){
        console.log(1);
    }
}
function callback()
{
    console.log("call back function");
    process.exit(); 
}


y();
setTimeout(callback,1000);
