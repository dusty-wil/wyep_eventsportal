console.log("Hello from venue.js");

function add_event_preview(ele, name, time, artists, description, price){
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
	var b44 = document.createElement("h6");
	b44.classList.add("subtitle");
	b44.classList.add("is-6");
	var eventprice = document.createTextNode("$" + price)
	b44.appendChild(eventprice);
	b4.appendChild(b44);

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

function add_artist_preview(ele, name, image){
	console.log("adding", name, image);
	var box = document.createElement("div");
	box.classList.add("box");
	var b1 = document.createElement("article");
	b1.classList.add("media");
	box.appendChild(b1);
	var b2 = document.createElement("div");
	b2.classList.add("media-left");
	b1.appendChild(b2);

	var cont = document.createElement("figure");
	var artistimg = document.createElement("img");
	artistimg.setAttribute("src",image);
	cont.appendChild(artistimg);
	b2.appendChild(cont);
	
	var c3 = document.createElement("div");
	c3.classList.add("media-content");
	b1.appendChild(c3);

	var c4 = document.createElement("div");
	c4.classList.add("content");
	c3.appendChild(c4);

	var artistname = document.createTextNode(name);
	c4.appendChild(artistname);

	ele.appendChild(box);
}

function main(){
	var artistsbody = document.getElementById("venue-artists");
	var eventsbody = document.getElementById("venue-events");
	console.log("eventsbody is", eventsbody);
	add_event_preview(eventsbody,"event1","May 8th",["artist1","artist2","artist3"],"this is an event description", -10);
	add_event_preview(eventsbody,"event2","May 9th",["artist4","artist5","artist6"],"this is an event description too", 20);

	add_artist_preview(artistsbody, "Artist 1", "https://static.pexels.com/photos/251454/pexels-photo-251454.jpeg");
	add_artist_preview(artistsbody, "Artist 2", "https://static.pexels.com/photos/160438/ankle-socks-children-socks-knitted-greeting-160438.jpeg");

	//var url_string = "http://www.example.com/venue.html?venue=name"; //window.location.href
	//var url = new URL(url_string);
	//var c = url.searchParams.get("c");
	//console.log(c);
}
