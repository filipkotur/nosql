conn = new Mongo();
db = conn.getDB("mydb");
//srednje vrijednosti  spremljene u varijablu
var avgValue_age =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgtime:1}).avgtime;
var avgValue_error =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgerror:1}).avgerror;
var avgValue_flow =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgrad_flow:1}).avgrad_flow;
var avgValue_fpvclose =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgfpv_close:1}).avgfpv_close;
var avgValue_fpvopen =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgfpv_open:1}).avgfpv_open;
var avgValue_avghigh =  db.statistika_shuttle.findOne({_id:null},{_id:0,avghigh:1}).avghigh;
var avgValue_avgbypass =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgbypass:1}).avgbypass;
var avgValue_avgbpv_close =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgbpv_close:1}).avgbpv_close;
var avgValue_avgbpv_open =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgbpv_open:1}).avgbpv_open;
var avgValue_avgclass =  db.statistika_shuttle.findOne({_id:null},{_id:0,avgclass:1}).avgclass;

//foreach prelazak preko cijelog dokumenta
db.novi.find().forEach(function (doc1) {
    var doc2 = doc1.time;
    var object   = {};
    var object2   = {};
    if (doc1.time <= avgValue_age) {
        object['time'] = doc1.time;
    }
    else{ 
        object2['time'] = doc1.time;
    }
    if (doc1.error_margin <= avgValue_error) {
        object['error_margin'] = doc1.error_margin;  
    }
    else{
        object2['error_margin'] = doc1.error_margin;
    }
    if (doc1.rad_flow <= avgValue_flow) {
        object['rad_flow'] = doc1.rad_flow;
    }
    else{ 
        object2['rad_flow'] = doc1.rad_flow;
    }
    if (doc1.fpv_close <= avgValue_fpvclose) {
        object['fpv_close'] = doc1.fpv_close;
    }
    else{ 
        object2['fpv_close'] = doc1.fpv_close;
    }
    if (doc1.fpv_open <= avgValue_fpvopen) {
        object['fpv_open'] = doc1.fpv_open;
    }
    else{ 
        object2['fpv_open'] = doc1.fpv_open;
    }
    if (doc1.high <= avgValue_avghigh) {
        object['high'] = doc1.high;
    }
    else{ 
        object2['high'] = doc1.high;
    }
    if (doc1.bypass <= avgValue_avgbypass) {
        object['bypass'] = doc1.bypass;
    }
    else{ 
        object2['bypass'] = doc1.bypass;
    }
    if (doc1.bpv_close <= avgValue_avgbpv_close) {
        object['bpv_close'] = doc1.bpv_close;
    }
    else{ 
        object2['bpv_close'] = doc1.bpv_close;
    }
    if (doc1.bpv_open <= avgValue_avgbpv_open) {
        object['bpv_open'] = doc1.bpv_open;
    }
    else{ 
        object2['bpv_open'] = doc1.bpv_open;
    }
    if (doc1.class <= avgValue_avgclass) {
        object['class'] = doc1.class;
    }
    else{ 
        object2['class'] = doc1.class;
    }
    //spremanje objekta u dokument 
    db.statistika1_shuttle.save(object);
    db.statistika2_shuttle.save(object2);

});
