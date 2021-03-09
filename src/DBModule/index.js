const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://FrankDB:Narut0997@cluster0.wa6ai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";


let db;
let connecting;



class DataBase{
    collectionName;
    Constructor(){
        if(connecting) return;
        connecting = true;
        MongoClient.connect(uri, {useUnifiedTopology: true}, (err, client)=>{
            if(err){
                console.log('Connection Failed');
                return;
            }
            db = client.db();
            console.log('Connection Succesful');
        }); 
        
    }


useCollection(name){
    this.collectionName = name;
} 

find(filter, cb){
    const collection = db.collection(this.collectionName);
    return collection.find(filter).toArray(cb);
}

insert(object){
    const collection = db.collection(this.collectionName);
    return collection.insertOne(object).then((result) => {
        console.log("Object inserted successfully");
    }).catch(err => {
        console.log("Failed to insert the object", err);
    });
 }

}

module.exports = DataBase;

