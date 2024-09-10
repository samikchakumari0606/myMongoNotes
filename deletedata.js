const dbConnect=require("./mongodb");

const deleteData=async()=>{
   const db=await dbConnect();
   const result=await db.deleteOne(
    {brand:"MICROMAX"}
   )

 
     if(result.acknowledged){
      console.log("record deleted")
     }
   console.log(result)
}

deleteData();