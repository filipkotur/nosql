// db = new Mongo().getDB("waveform");
// var i = 0;
conn = new Mongo();
db = conn.getDB("mydb");

//iz tablice se izvlače srednje vrijednosti kada je standardna devijacija  > srednje vrijednosti +   srednje vrijednosti*10%
 db.emb2_shuttle.find().forEach(function(doc1) {
  
  var niz = [];
  var i =0;

    if(doc1.time[2]<doc1.time[1]+(doc1.time[1]*0.1))
     {
      niz[i] = doc1.time[1]
      i = i+1;
       
         
    }
    if(doc1.error_margin[2]<doc1.error_margin[1]+(doc1.error_margin[1]*0.1))
     {
      niz[i] = doc1.error_margin[1]
      i = i+1;
       
         
    }
    if(doc1.rad_flow[2]<doc1.rad_flow[1]+(doc1.rad_flow[1]*0.1))
     {
      niz[i] = doc1.rad_flow[1]
      i = i+1;
        
         
    }
    if(doc1.fpv_close[2]<doc1.fpv_close[1]+(doc1.fpv_close[1]*0.1))
     {
      niz[i] = doc1.fpv_close[1]
      i = i+1;
       
         
    }
    if(doc1.fpv_open[2]<doc1.fpv_open[1]+(doc1.fpv_open[1]*0.1))
     {
      niz[i] = doc1.fpv_open[1]
      i = i+1;
        
         
    }
    if(doc1.high[2]<doc1.high[1]+(doc1.high[1]*0.1))
     {
      niz[i] = doc1.high[1]
      i = i+1;
        
         
    }
    if(doc1.bypass[2]<doc1.bypass[1]+(doc1.bypass[1]*0.1))
     {
      niz[i] = doc1.bypass[1]
      i = i+1;
        
         
    }
    if(doc1.bpv_close[2]<doc1.bpv_close[1]+(doc1.bpv_close[1]*0.1))
     {
      niz[i] = doc1.bpv_close[1]
      i = i+1;
        
         
    }
    if(doc1.bpv_open[2]<doc1.bpv_open[1]+(doc1.bpv_open[1]*0.1))
     {
      niz[i] = doc1.bpv_open[1]
      i = i+1;
        
         
    }
    if(doc1.class[2]<doc1.class[1]+(doc1.class[1]*0.1))
     {
      niz[i] = doc1.class[1]
      i = i+1;
        
         
    }
    //sve se sprema u isti objekt
    db.emb2_shuttle.update(
      { _id: doc1._id },
        {$set:{Zadatak7vrijeme : niz}},{multi:true}
        )


    
     
  }
  );
