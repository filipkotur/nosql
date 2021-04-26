conn = new Mongo();
db = conn.getDB("mydb");

//narpavljen je index u kojem moraju biti error i klasa te ne smije imati iste vrijednosti 
db.novi.createIndex(
	{ error_margin: 1, class: 1},
	{
	unique: true,
});

//traže se svi dokumenti koji imaju error_margin 0 i klasu manju od 3
var variindex = db.novi.find( { error_margin: {$eq: 0}, class: { $lte: 3 }});

while(variindex.hasNext()) {
	printjson(variindex.next());
}




 
