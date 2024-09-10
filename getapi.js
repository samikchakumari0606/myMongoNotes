

const express=require("express");
const mongodb=require("mongodb");
const dbConnect=require("./mongodb");
const app=express();


app.use(express.json());//to post data

//creating GetApi with express and Mongo
app.get("/",async(req,res)=>{

    let data=await dbConnect();
    data=await data.find().toArray();
    res.send(data);
    console.log(data);
})

//creating PostApi with express and Mongo
app.post("/",async (req,res)=>{
     let data=await dbConnect();
     let result=await data.insertOne(req.body);
     res.send(result)

})

//creating PutApi with express and Mongo

app.put("/",async (req,res)=>{
    let data=await dbConnect();
    let result=data.updateOne(
        {name:"REDMI12"},
        // {$set:{name:"REDMI12"}}//static data
        {$set:req.body}//dynamic data
    )
    console.log(req.body)
    res.send({result:"update"} )
})

//creating deleteApi with express and Mongo

app.delete("/:id",async (req,res)=>{
    console.log(req.params.id);
    const data=await dbConnect();
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result);
}
)


app.listen(5000)