async function loadRSSFeed() {


    const fetchFeed = await fetch("rss.xml");
    
    const feedData = await fetchFeed.text();
    
    
    const xml = new window.DOMParser().parseFromString(feedData, "text/xml");
    
    const RSSitems = xml.querySelectorAll("item");
    let output = "";

    RSSitems.forEach(item => {
        const title = item.querySelector("title").textContent;


        const link = item.querySelector("link").textContent;


        const description = item.querySelector("description").textContent;

        const pubDate = item.querySelector("pubDate").textContent;



        output += `
            <div>
                <h3><a href="${link}">${title}</a></h3>
                
                <p>${description}</p>

                <small>${pubDate}</small>
                <hr>
            </div>
        `;

    });

    
    document.getElementById("rss-feed").innerHTML = output;
}

loadRSSFeed();
