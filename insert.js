//inserting data
const dbConnect=require("./mongodb");

const insert=async()=>{
    const db=await dbConnect();
    // const result=await db.insertOne(
    //     {name:"note 5 ", brand:"vivo", type:"phone"}
    // )
    const result=await db.insertMany(
        [

            {name:"note 6 ", brand:"micromax", type:"phone"},
            {name:"note 7 ", brand:"micromax", type:"phone"}

        ]
       
    )
    console.log(result)
}

insert();
