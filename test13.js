var post_data = 'text=useless';
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "/activate-plugin/1", true);
xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xmlhttp.send(post_data);
