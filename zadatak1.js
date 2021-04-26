var mongoDb         = require("mongodb");
const database = require("./database");
var mongoClient     = mongoDb.MongoClient;
var dbname          = "mydb";
var collectionName  = "novi";
var filename        = 'shuttle.tst';
console.log('***************Process started');
//napisan je u node pokušaj spajanja s bazom
mongoClient.connect("mongodb://localhost", function (err, client) {
  if (err) {
    throw new Error('Database failed to connect!');
 } else {
 console.log('MongoDB successfully connected on port 27017.');
  }
console.log('***************Successfully connected to mongodb');
    
  var db = client.db('mydb');
//napraviti kolekciju "novi" u compasu
var collection  = db.collection("novi");
	var fs          = require('fs');
	var readline    = require('readline');
	var stream      = require('stream');
	var instream    = fs.createReadStream(filename);
	var outstream   = new stream;
	var rl = readline.createInterface(instream,outstream);

        console.log('***************Parsing, please wait ...');

        rl.on('line',function(line){
            try{
                var str = line.split('\n');
                var arr = str.toString();
//sve se sprema u objekt s nazivima polja koja su vec zadana jedno sam morao izmisliti 
//nema niti jedne kategorične varijable
	var object   = {};
    var splitted = arr.split(" ");
               object['time'] = parseInt(splitted[0]); 

object['error_margin'] = parseInt(splitted[1]); 
if (object['error_margin']== null){
    object['error_margin']="-1";
}  
	object['rad_flow'] = parseInt(splitted[2]); 
    if (object['rad_flow']== null){
        object['rad_flow']="-1";
    } 

	object['fpv_close'] = parseInt(splitted[3]); 
    if (object['fpv_close']== null){
        object['fpv_close']="-1";
    } 
	object['fpv_open'] = parseInt(splitted[4]); 
    if (object['fpv_open']== null){
        object['fpv_open']="-1";
    }
	object['high'] = parseInt(splitted[5]); 
    if (object['high']== null){
        object['high']="-1";
    }
	object['bypass'] = parseInt(splitted[6]); 
	if (object['bypass']== null){
        object['bypass']="-1";
    }
    object['bpv_close'] = parseInt(splitted[7]); 
	if (object['bpv_close']== null){
        object['bpv_close']="-1";
    }
    object['bpv_open'] = parseInt(splitted[8]); 
	if (object['bpv_open']== null){
        object['bpv_open']="-1";
    }
    object['class'] = parseInt(splitted[9]); 
    if (object['class']== null){
        object['class']="-1";
    }

                var res = collection.insert(object);
            }
            catch (err){
                console.log(err);
            }
        });
        
        rl.on('close',function(){
            client.close();
            console.log('***************completed');
        });
    }
);