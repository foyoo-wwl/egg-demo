<!-- app/view/news/list.tpl -->
<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <h1>
{{ helper.relativeTime(item.time) }}</h1>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="{{ item.post_title }}">{{ item.post_date }}</a>
          <p>{{ item.post_title }}</p>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>