// document.body.style.backgroundColor = 'black';

function createCard(title, channelname, views, months , duration, thumbnail){
    document.getElementById("thumbnail").src = `${thumbnail}`;
    document.getElementById('title').innerHTML = `${title}`;
    document.getElementById('cname').innerHTML = `${channelname}`;
    document.getElementById('views').innerHTML = `${views}`;
    document.getElementById('months').innerHTML = `${months}`;
    document.getElementById('duration').innerHTML = `${duration}`;
}


createCard("Introduction to Backend", "CodewithHarry", "56000", "7", "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLB6VzxANxt3dHm91HW9lLfDlxvmuA")