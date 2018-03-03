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
	var venuetitle = document.getElementById("venuename");

	var venuimage = document.getElementById("venueimage");
	var venuinfo = document.getElementById("venueinfo");
	var venuloc = document.getElementById("venueloc");

	console.log("eventsbody is", eventsbody);
	add_event_preview(eventsbody,"event1","May 8th",["artist1","artist2","artist3"],"this is an event description", -10);
	add_event_preview(eventsbody,"event2","May 9th",["artist4","artist5","artist6"],"this is an event description too", 20);

	add_artist_preview(artistsbody, "Artist 1", "https://static.pexels.com/photos/251454/pexels-photo-251454.jpeg");
	add_artist_preview(artistsbody, "Artist 2", "https://static.pexels.com/photos/160438/ankle-socks-children-socks-knitted-greeting-160438.jpeg");

	var xhr = new XMLHttpRequest();
	var venues;
	xhr.open("GET","http://wyep.herokuapp.com/venues",true);
	xhr.onload=  function(){
		if(xhr.readyState === 4 && xhr.status === 200){
			//venues= JSON.parse(xhr.responseText);
			//venues = JSON.parse(`[{"id":6073,"name":"12 Peers Theater","neighborhood":"Oakland","latitude":"40.44433","longitude":"-79.95315","url":"https://www.pghcitypaper.com/pittsburgh/12-peers-theater/Location?oid=1960281"},{"id":6074,"name":"1311","neighborhood":"South Side","latitude":"40.429","longitude":"-79.98483","url":"https://www.pghcitypaper.com/pittsburgh/1311/Location?oid=1354675"},{"id":6075,"name":"15 Minutes Gallery","neighborhood":"Uptown","latitude":"40.43416","longitude":"-79.9703","url":"https://www.pghcitypaper.com/pittsburgh/15-minutes-gallery/Location?oid=1424371"},{"id":6076,"name":"1613 Saloon","neighborhood":"Mt. Oliver","latitude":"40.39939","longitude":"-79.98873","url":"https://www.pghcitypaper.com/pittsburgh/1613-saloon/Location?oid=1352430"},{"id":6077,"name":"1844 Restaurant","neighborhood":"","latitude":"40.6667","longitude":"-79.60281","url":"https://www.pghcitypaper.com/pittsburgh/1844-restaurant/Location?oid=1740793"},{"id":6079,"name":"1947 Tavern","neighborhood":"Shadyside","latitude":"40.45571","longitude":"-79.93112","url":"https://www.pghcitypaper.com/pittsburgh/1947-tavern/Location?oid=1500559"},{"id":6080,"name":"209/9 Gallery","neighborhood":"Downtown","latitude":"40.44349","longitude":"-79.99793","url":"https://www.pghcitypaper.com/pittsburgh/2099-gallery/Location?oid=1423728"},{"id":6081,"name":"21st Street Coffee","neighborhood":"Downtown","latitude":"40.441","longitude":"-80.0008","url":"https://www.pghcitypaper.com/pittsburgh/21st-street-coffee/Location?oid=1423966"},{"id":6082,"name":"21st Street Coffee","neighborhood":"Strip District","latitude":"40.45214","longitude":"-79.9838","url":"https://www.pghcitypaper.com/pittsburgh/21st-street-coffee/Location?oid=1423967"},{"id":6083,"name":"260 Forbes Avenue","neighborhood":"Downtown","latitude":"40.44014","longitude":"-80.0016","url":"https://www.pghcitypaper.com/pittsburgh/260-forbes-avenue/Location?oid=3896120"},{"id":6084,"name":"28 West Second Gallery \u0026 Studio Space","neighborhood":"Greensburg","latitude":"40.30119","longitude":"-79.54483","url":"https://www.pghcitypaper.com/pittsburgh/28-west-second-gallery-and-studio-space/Location?oid=1424744"},{"id":6087,"name":"30Bar","neighborhood":"North Versailles","latitude":"40.36579","longitude":"-79.77732","url":"https://www.pghcitypaper.com/pittsburgh/30bar/Location?oid=1488702"},{"id":6088,"name":"3101 Penn Ave","neighborhood":"Strip District","latitude":"40.46009","longitude":"-79.97144","url":"https://www.pghcitypaper.com/pittsburgh/3101-penn-ave/Location?oid=5227593"},{"id":6089,"name":"31st Street Pub","neighborhood":"Strip District","latitude":"40.46005","longitude":"-79.97138","url":"https://www.pghcitypaper.com/pittsburgh/31st-street-pub/Location?oid=1423053"},{"id":6085,"name":"3 G Gallery","neighborhood":"Downtown","latitude":"40.44432","longitude":"-79.99401","url":"https://www.pghcitypaper.com/pittsburgh/3-g-gallery/Location?oid=1423907"},{"id":6086,"name":"3 Lakes Golf Club","neighborhood":"Penn Hills","latitude":"40.47785","longitude":"-79.80505","url":"https://www.pghcitypaper.com/pittsburgh/3-lakes-golf-club/Location?oid=1423839"},{"id":6090,"name":"42nd St. Rock House","neighborhood":"Greensburg","latitude":"40.30678","longitude":"-79.57699","url":"https://www.pghcitypaper.com/pittsburgh/42nd-st-rock-house/Location?oid=1426020"},{"id":6091,"name":"565 LIVE","neighborhood":"Bellevue","latitude":"40.4966","longitude":"-80.05771","url":"https://www.pghcitypaper.com/pittsburgh/565-live/Location?oid=1629830"},{"id":6092,"name":"5801 Video Lounge and Cafe","neighborhood":"Shadyside","latitude":"40.45644","longitude":"-79.93078","url":"https://www.pghcitypaper.com/pittsburgh/5801-video-lounge-and-cafe/Location?oid=1351757"},{"id":6093,"name":"60 Minute Missions Escape Room","neighborhood":"Greensburg","latitude":"40.30288","longitude":"-79.5416","url":"https://www.pghcitypaper.com/pittsburgh/60-minute-missions-escape-room/Location?oid=3231059"},{"id":6094,"name":"61B Cafe","neighborhood":"Swissvale","latitude":"40.43235","longitude":"-79.89407","url":"https://www.pghcitypaper.com/pittsburgh/61b-cafe/Location?oid=1712567"},{"id":6095,"name":"61C Cafe","neighborhood":"Squirrel Hill","latitude":"40.43616","longitude":"-79.92276","url":"https://www.pghcitypaper.com/pittsburgh/61c-cafe/Location?oid=1422333"},{"id":6096,"name":"707 Penn Gallery","neighborhood":"Downtown","latitude":"40.44345","longitude":"-79.99996","url":"https://www.pghcitypaper.com/pittsburgh/707-penn-gallery/Location?oid=1423606"},{"id":6078,"name":"The 1889 Cafe","neighborhood":"South Side","latitude":"40.4288","longitude":"-79.97688","url":"https://www.pghcitypaper.com/pittsburgh/the-1889-cafe/Location?oid=1422919"}]`);
			console.log(venues);
		}
	}
	//xhr.send(null);
	
			venues = JSON.parse(`[{"id":6073,"name":"12 Peers Theater","neighborhood":"Oakland","latitude":"40.44433","longitude":"-79.95315","url":"https://www.pghcitypaper.com/pittsburgh/12-peers-theater/Location?oid=1960281"},{"id":6074,"name":"1311","neighborhood":"South Side","latitude":"40.429","longitude":"-79.98483","url":"https://www.pghcitypaper.com/pittsburgh/1311/Location?oid=1354675"},{"id":6075,"name":"15 Minutes Gallery","neighborhood":"Uptown","latitude":"40.43416","longitude":"-79.9703","url":"https://www.pghcitypaper.com/pittsburgh/15-minutes-gallery/Location?oid=1424371"},{"id":6076,"name":"1613 Saloon","neighborhood":"Mt. Oliver","latitude":"40.39939","longitude":"-79.98873","url":"https://www.pghcitypaper.com/pittsburgh/1613-saloon/Location?oid=1352430"},{"id":6077,"name":"1844 Restaurant","neighborhood":"","latitude":"40.6667","longitude":"-79.60281","url":"https://www.pghcitypaper.com/pittsburgh/1844-restaurant/Location?oid=1740793"},{"id":6079,"name":"1947 Tavern","neighborhood":"Shadyside","latitude":"40.45571","longitude":"-79.93112","url":"https://www.pghcitypaper.com/pittsburgh/1947-tavern/Location?oid=1500559"},{"id":6080,"name":"209/9 Gallery","neighborhood":"Downtown","latitude":"40.44349","longitude":"-79.99793","url":"https://www.pghcitypaper.com/pittsburgh/2099-gallery/Location?oid=1423728"},{"id":6081,"name":"21st Street Coffee","neighborhood":"Downtown","latitude":"40.441","longitude":"-80.0008","url":"https://www.pghcitypaper.com/pittsburgh/21st-street-coffee/Location?oid=1423966"},{"id":6082,"name":"21st Street Coffee","neighborhood":"Strip District","latitude":"40.45214","longitude":"-79.9838","url":"https://www.pghcitypaper.com/pittsburgh/21st-street-coffee/Location?oid=1423967"},{"id":6083,"name":"260 Forbes Avenue","neighborhood":"Downtown","latitude":"40.44014","longitude":"-80.0016","url":"https://www.pghcitypaper.com/pittsburgh/260-forbes-avenue/Location?oid=3896120"},{"id":6084,"name":"28 West Second Gallery \u0026 Studio Space","neighborhood":"Greensburg","latitude":"40.30119","longitude":"-79.54483","url":"https://www.pghcitypaper.com/pittsburgh/28-west-second-gallery-and-studio-space/Location?oid=1424744"},{"id":6087,"name":"30Bar","neighborhood":"North Versailles","latitude":"40.36579","longitude":"-79.77732","url":"https://www.pghcitypaper.com/pittsburgh/30bar/Location?oid=1488702"},{"id":6088,"name":"3101 Penn Ave","neighborhood":"Strip District","latitude":"40.46009","longitude":"-79.97144","url":"https://www.pghcitypaper.com/pittsburgh/3101-penn-ave/Location?oid=5227593"},{"id":6089,"name":"31st Street Pub","neighborhood":"Strip District","latitude":"40.46005","longitude":"-79.97138","url":"https://www.pghcitypaper.com/pittsburgh/31st-street-pub/Location?oid=1423053"},{"id":6085,"name":"3 G Gallery","neighborhood":"Downtown","latitude":"40.44432","longitude":"-79.99401","url":"https://www.pghcitypaper.com/pittsburgh/3-g-gallery/Location?oid=1423907"},{"id":6086,"name":"3 Lakes Golf Club","neighborhood":"Penn Hills","latitude":"40.47785","longitude":"-79.80505","url":"https://www.pghcitypaper.com/pittsburgh/3-lakes-golf-club/Location?oid=1423839"},{"id":6090,"name":"42nd St. Rock House","neighborhood":"Greensburg","latitude":"40.30678","longitude":"-79.57699","url":"https://www.pghcitypaper.com/pittsburgh/42nd-st-rock-house/Location?oid=1426020"},{"id":6091,"name":"565 LIVE","neighborhood":"Bellevue","latitude":"40.4966","longitude":"-80.05771","url":"https://www.pghcitypaper.com/pittsburgh/565-live/Location?oid=1629830"},{"id":6092,"name":"5801 Video Lounge and Cafe","neighborhood":"Shadyside","latitude":"40.45644","longitude":"-79.93078","url":"https://www.pghcitypaper.com/pittsburgh/5801-video-lounge-and-cafe/Location?oid=1351757"},{"id":6093,"name":"60 Minute Missions Escape Room","neighborhood":"Greensburg","latitude":"40.30288","longitude":"-79.5416","url":"https://www.pghcitypaper.com/pittsburgh/60-minute-missions-escape-room/Location?oid=3231059"},{"id":6094,"name":"61B Cafe","neighborhood":"Swissvale","latitude":"40.43235","longitude":"-79.89407","url":"https://www.pghcitypaper.com/pittsburgh/61b-cafe/Location?oid=1712567"},{"id":6095,"name":"61C Cafe","neighborhood":"Squirrel Hill","latitude":"40.43616","longitude":"-79.92276","url":"https://www.pghcitypaper.com/pittsburgh/61c-cafe/Location?oid=1422333"},{"id":6096,"name":"707 Penn Gallery","neighborhood":"Downtown","latitude":"40.44345","longitude":"-79.99996","url":"https://www.pghcitypaper.com/pittsburgh/707-penn-gallery/Location?oid=1423606"},{"id":6078,"name":"The 1889 Cafe","neighborhood":"South Side","latitude":"40.4288","longitude":"-79.97688","url":"https://www.pghcitypaper.com/pittsburgh/the-1889-cafe/Location?oid=1422919"}]`);
	console.log(venues);
	
	var url_string = "http://www.example.com/venue.html?venue=1311"; //window.location.href
	var url = new URL(url_string);
	var venuename = url.searchParams.get("venue");
	venuetitle.innerHTML = venuename;
	var thisvenue;
	venues.forEach(function(x){
		if( x["name"] == venuename){
			thisvenue = x;	
			return;
		}
	});
	console.log(thisvenue);
}
