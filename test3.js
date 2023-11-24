var post_data = 'text=test';
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "/new-comment/18", true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(post_data);