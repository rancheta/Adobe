function httpGetUrl(url, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     callback(this.responseText)
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function getInsecureAuthDetails() {
	return {
		key: "464ae304349bceddf45d9a4000de5d46"
	}
}
									