var url = "https://www.reddit.com/r/saveone/submit?selftext=true&title=";
String.prototype.replaceAll = function(str1, str2, ignore) 
{
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
} 
function getRandom(a) {
	return a[Math.floor(Math.random() * a.length)];
}
function makeTitle(people,situation) {
	var ret = "";
	var person1 = getRandom(people);
	var person2 = getRandom(people);
	while (person2 == person1) {
		person2 = getRandom(people);
	};
	var situation = getRandom(situations);
	ret += person1;
	ret += " and ";
	ret += person2;
	ret += " ";
	ret += situation;
	ret += ". Save one.";
	return ret;
};
function makeURL(p,s) {
	var ret = url;
	var title = makeTitle(p,s);
	title = title.replaceAll(" ","%20").replaceAll(".","%2E");
	ret += title;
	return ret;
}
