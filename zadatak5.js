

//peti zadatak je sa kategoričnim vrijednostima pa sam napisao pseudo kod

conn = new Mongo();
db = conn.getDB("mydb");

var doc_rezultat = db.statistika_shuttle.findOne();

db.novi.find().forEach(function(doc1) {
  
  var object   = {};
  
     object['ime_varijable'] = [doc1.ime_varijable,ime_varijable.avgtime,ime_varijable.Stddevtime],
     

   db.emb_shuttle.save(object);

  
}
);