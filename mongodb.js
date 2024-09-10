//db connect universal code
//READ DATA 

const {MongoClient}=require("mongodb");
const url='mongodb://localhost:27017';//need to connect
const client=new MongoClient(url);
const database='e-com';//database name

async function dbConnect(){
    let result=await client.connect();//CLIENT CONNECT
    let db=result.db(database);//CONNECT DATABASE
    return db.collection('product');//CONNECT COLLECTION
    
   
}
// console.log(dbConnect())

module.exports=dbConnect;