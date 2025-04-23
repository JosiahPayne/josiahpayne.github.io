//load the feed
async function loadRSS() {
    
    
    
    try {
        //fetch file
        const response = await fetch("rss.xml");
        //declare varibles to pass it through text
        const parser = new DOMParser();
        const text = await response.text();

        const xml = parser.parseFromString(text, "text/xml");
        //declare varible to store RSSItems
        let RSSItems = "";
        xml.querySelectorAll("item").forEach(item => { 

            let title = item.querySelector("title").textContent;

            let link = item.querySelector("link").textContent;
            let description = item.querySelector("description").textContent;

            
            let pubDate = item.querySelector("pubDate")?.textContent || "";

            RSSItems += `
                <div>
                    <h2><a href="${link}" target="_blank">${title}</a></h2>
                    
                    <p>${description}</p>
                    <p>${pubDate}</p>
                </div>
            `;
        });

        document.getElementById("rss-feed").innerHTML = RSSItems || "no items";
    } catch (error) {
        document.getElementById("rss-feed").innerHTML = "Can't find rss file";
    }



}


//run it
loadRSS();
