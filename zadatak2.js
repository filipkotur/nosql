conn = new Mongo();
db = conn.getDB("mydb");
//uzimaju se vrijednosti koje nisu -1
db.novi.aggregate([
  {
		$match: {"time": {$ne:-1}},
    $match: {"error_margin": {$ne:-1}},
    $match: {"rad_flow": {$ne:-1}},
    $match: {"fpv_close": {$ne:-1}},
    $match: {"fpv_open": {$ne:-1}},
    $match: {"high": {$ne:-1}},
    $match: {"bypass": {$ne:-1}},
    $match: {"bpv_close": {$ne:-1}},
    $match: {"bpv_open": {$ne:-1}}, 
    $match: {"class": {$ne:-1}}
	 },

     {
       $group:
         {
           //racuna se srednja vrijednost i standardna devijacija
           _id: null,
           avgtime: { $avg: "$time" },
           Stddevtime: { $stdDevSamp: "$time" },
           avgerror: { $avg: "$error_margin" },
           Stddeverror: { $stdDevSamp: "$error_margin" },
           avgrad_flow: { $avg: "$rad_flow" },
           Stddevrad_flow: { $stdDevSamp: "$rad_flow" },
           avgfpv_close: { $avg: "$fpv_close" },
           Stddevfpv_close: { $stdDevSamp: "$fpv_close" },      
           avgfpv_open: { $avg: "$fpv_open" },
           Stddevfpv_open: { $stdDevSamp: "$fpv_open" },
           avghigh: { $avg: "$high" },
           Stddevhigh: { $stdDevSamp: "$high" },
           avgbypass: { $avg: "$bypass" },
           Stddevbypass: { $stdDevSamp: "$bypass" },
           avgbpv_close: { $avg: "$bpv_close" },
           Stddevbpv_close: { $stdDevSamp: "$bpv_close" },
           avgbpv_open: { $avg: "$bpv_open" },
           Stddevbpv_open: { $stdDevSamp: "$bpv_open" },
           avgclass: { $avg: "$class" },
           Stddevclass: { $stdDevSamp: "$class" },

         }
     },
          //sve se sprema u u dokument 
	 { 
		$out: "statistika_shuttle"                       
   } 
              
   
    ]);
    //broj nomissing vrijednosti
    db.statistika_shuttle.insert( { nomissingtime : db.novi.find({time:-1}).count(), 
    nomissingbypass : db.novi.find({bypass:-1}).count(),
    nomissingerror : db.novi.find({error_margin:-1}).count(),
    nomissingrad_flow : db.novi.find({rad_flow:-1}).count(),
     nomissinfpv_close : db.novi.find({fpv_close:-1}).count(),
     nomissinfpv_open : db.novi.find({fpv_open:-1}).count(),
     nomissinhigh : db.novi.find({high:-1}).count(),
     nomissinbpv_close : db.novi.find({bpv_close:-1}).count(),
     nomissinbpv_open : db.novi.find({bpv_open:-1}).count(),
     nomissinclass : db.novi.find({class:-1}).count() } )




