console.log("Hello from venue.js");

function add_event_to(ele, name, time, artists, description){
	console.log("adding ", ele, name, time);
	var box = document.createElement("div");
	box.classList.add("box");
	var b1 = document.createElement("article");
	b1.classList.add("media");
	box.appendChild(b1);
	var b2 = document.createElement("div");
	b2.classList.add("media-left");
	b1.appendChild(b2);
	
	var b3 = document.createElement("h4");
	b3.classList.add("title");
	b3.classList.add("is-4");
	var eventname = document.createTextNode(name);
	b3.appendChild(eventname);
	var b4 = document.createElement("h4");
	b4.classList.add("subtitle");
	b4.classList.add("is-4");
	var eventdate = document.createTextNode(time);
	b4.appendChild(eventdate);
	
	b2.appendChild(b3);
	b2.appendChild(b4);
	
	var c3 = document.createElement("div");
	c3.classList.add("media-content");
	b1.appendChild(c3);

	var c4 = document.createElement("div");
	c4.classList.add("content");
	c3.appendChild(c4);

	var c5 = document.createElement("p");
	c4.appendChild(c5);
	var eventartists = document.createTextNode(artists.join(","));
	c5.appendChild(eventartists);

	var c6 = document.createElement("p");
	c4.appendChild(c6);
	var eventdescription = document.createTextNode(description);
	c6.appendChild(eventdescription);

	ele.appendChild(box);

}

function main(){
	var artistsbody = document.getElementById("venue-artists");
	var eventsbody = document.getElementById("venue-events");
	console.log("eventsbody is", eventsbody);
	add_event_to(eventsbody,"event1","May 8th",["artist1","artist2","artist3"],"this is an event description");
}
