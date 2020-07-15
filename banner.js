//add company banner

addCompanyBanner('login_body');
http://dinacheley.com/wialon/lessons/customMenu.js
function addCompanyBanner(parentNode)
{
    let doc = document;
    let div = doc.createElement('div'); // Create <div> element
    div.id = "new_banner"; 
    //Fill it with the content
    div.innerHTML ="<a href='https://gurtam.com/en/wialon' target='_blank'><img src='http://dinacheley.com/wialon/lessons/images/1.jpg' class='img-thumbnail' style = 'display: block; margin-left: auto; margin-right: auto' alt='Logo'></a>"
    //Define CSS style
    div.style = "border: none;margin:100px auto;display: block; width: 100%"; //-100px for night skin

    doc.getElementById(parentNode).after(div);//to insert <div> after <div id=login_body>
}
