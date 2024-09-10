const dbConnect=require("./mongodb");

const updateData=async()=>{
    let db=await dbConnect();
    // const result=await db.updateOne(
    //     {brand:"mi"},{$set:{brand:"MI"}}
    // )

    const result=await db.updateMany(

            {brand:"micromax"},{$set:{brand:"MICROMAX"}}

        
    )
    console.log(result)
}
updateData();