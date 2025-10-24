let ouput;

ouput = document.all;

ouput = document.all[0];

ouput = document.all.length;

ouput = document.documentElement;

ouput = document.head;

ouput = document.body;

ouput = document.head.children;

ouput = document.body.children;

ouput = document.doctype;

ouput = document.domain;

ouput = document.URL;

ouput = document.characterSet;


ouput = document.forms;

ouput = document.forms[0];

ouput = document.forms[0].id;

ouput = document.forms[0].method;

ouput = document.forms[0].action;


ouput = document.links;

ouput = document.links[0];

ouput = document.links[0].href;

ouput = document.links[0].href = 'https://google.com';

ouput = document.links[0].id = 'google-link';

ouput = document.links[0].className = 'google-link';


ouput = document.images;

ouput = document.images[0];

ouput = document.images[0].src;


const forms = Array.from(document.forms);  //included 
forms.forEach(form => {
    console.log(form);
})

console.log(ouput);