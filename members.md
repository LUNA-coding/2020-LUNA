---
layout: default
---
<div class="member__container">
  <ul class="member__content">
    {% for member in site.members reversed %}
    <li class="member__item">
      <h3>{{ member.grade }}</h3>
    </li>
    {% endfor %}
  </ul>
</div>
