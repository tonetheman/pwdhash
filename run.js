
load("domain-extractor.js");
load("hashed-password.js");
load("md5.js");
load("pwdhash.js");

domain = new String(arguments[0]);
password = new String(arguments[1]);

document = {};
document.hashform={};
document.hashform.domain = {};
document.hashform.domain.value = domain;
document.hashform.sitePassword = {};
document.hashform.sitePassword.value = password;

document.hashform.hashedPassword = {};
document.hashform.hashedPassword.value="";

GenerateToTextField();
println("hashed value: " + document.hashform.hashedPassword.value);

