const dbConnect=require("./mongodb");


// handle dbConnect promise
// toArray return promise and handleing it
// FIRST METHOD TO CONNECT AND GET DATA
dbConnect().then((res)=>{
   res.find({}).toArray().then((data)=>{
    console.log(data)
   })
})

// SECOND METHOD TO CONNECT AND GET DATA
const main=async()=>{
    // console.log("main function called")
    let data=await dbConnect();
    data=await data.find().toArray();
    console.log(data);
}
main()

