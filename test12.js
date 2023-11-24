var post_data = 'title=TestTitle&text='+document.body.outerHTML;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "/new-post", true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(post_data);
