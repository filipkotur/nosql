conn = new Mongo();
db = conn.getDB("mydb");

var doc_rezultat = db.rezultat.findOne();

db.novi.find().forEach(function(doc1) {
  //svakoj vrijednosti je pridružena njena srednja vrijednost i devijacija
  var object   = {};
  
     object['time'] = [doc1.time,doc_rezultat.avgtime,doc_rezultat.Stddevtime],
     object['error_margin'] = [doc1.error_margin,doc_rezultat.avgerror,doc_rezultat.Stddeverror], 
     object['rad_flow'] =  [doc1.rad_flow,doc_rezultat.avgrad_flow,doc_rezultat.Stddevrad_flow], 
     object['fpv_close'] =[ doc1.fpv_close,doc_rezultat.avgfpv_close,doc_rezultat.Stddevfpv_close],
      object['fpv_open'] = [doc1.fpv_open,doc_rezultat.avgfpv_open,doc_rezultat.Stddevfpv_open],
      object['high'] = [doc1.high,doc_rezultat.avghigh,doc_rezultat.Stddevhigh],
      object['bypass'] = [doc1.bypass,doc_rezultat.avgbypass,doc_rezultat.Stddevbypass],
      object['bpv_close'] = [doc1.bpv_close,doc_rezultat.avgbpv_close,doc_rezultat.Stddevbpv_close],
      object['bpv_open'] = [doc1.bpv_open,doc_rezultat.avgbpv_open,doc_rezultat.Stddevbpv_open],
      object['class'] = [doc1.class,doc_rezultat.avgclass,doc_rezultat.Stddevclass],


   
  //objekt je spremljen u emb2_shuttle
   db.emb2_shuttle.save(object);

  
}
);
