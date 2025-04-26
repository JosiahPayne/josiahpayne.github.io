async function loadRssFeed() {


    const feedFetch = await fetch("rss.xml");
    
    const feedData = await feedFetch.text();
    
    
    const xml = new window.DOMParser().parseFromString(feedData, "text/xml");
    
    const items = xml.querySelectorAll("item");
    let output = "";

    items.forEach(item => {
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

loadRssFeed();
