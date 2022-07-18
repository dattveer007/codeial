const exp=require('express');
const app=exp();
const port=8000;
app.listen(port,(err)=>{
    if(err){
        console.log(`Error :${err}`);
        return;
    }
    console.log(`Server running at port :${port}`);
})