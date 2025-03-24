
function createCard(title, channelname, views, months , duration, thumbnail){
    let viewstr;
if(views<1000){
    viewstr = views;
}
else if(views>=1000000){
    viewstr = views/1000000 + "M";
}
else{
    viewstr = views/1000 + "k";
}

    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
                <div class="duration">${duration}</div>
            </div>
            <div class="text">
                <div class="title">${title}</div>
                <p>${channelname}  ${viewstr} views ${months} months ago</p>
            </div>
        </div>`
    
        
        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
    }


createCard("Introduction to Backend | Introduction to HTML Vide o #01", "CodewithHarry", "56000", "7", "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")


createCard("Introduction to Backend | Introduction to HTML Vide o #01", "CodewithHarry", "56000", "7", "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")