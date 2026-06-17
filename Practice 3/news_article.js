// Step 3: Create XMLHttpRequest object and define JSON file URL
var xhr = new XMLHttpRequest();
var url = './news_article.json';

// Step 4: Configure GET request
xhr.open('GET', url, true);

// Step 5: Set response type to JSON
xhr.responseType = 'json';

// Step 6: Handle successful response
xhr.onload = function () {

    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {

        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        var title = document.createElement('h2');
        title.textContent = article.title;

        var description = document.createElement('p');
        description.textContent = article.description;

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);

        articlesDiv.appendChild(articleDiv);
    });
};

// Send the request
xhr.send();