//treci zadatak je sa kategoričnim vrijednostima pa sam napisao pseudo kod

conn = new Mongo();
db = conn.getDB("mydb");

db.frekvencija_shuttle.insertMany( [{ ime_varijable: "ime_polja_koje_je_kategorično", vrijednosti_polja}]);


db.novi.find().forEach(function (myDoc) {
	
	if(myDoc.ime_polja_koje_je_kategorično == vrijednost){
		db.frekvencija_shuttle.update(
			{ime_varijable : "ime_polja_koje_je_kategorično" },
			{$inc:{"vrijednost":1}}
		)	
	}
	else if(myDoc.ime_polja_koje_je_kategorično == vrijednost2){
		db.frekvencija_shuttle.update(
			{ime_varijable : "ime_polja_koje_je_kategorično" },
			{$inc:{"vrijednost2":1}}
		)
	}
	
})