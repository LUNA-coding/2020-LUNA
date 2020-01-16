---
layout: default
---
<div class="member">
    <div class="member__container">
        {% for member in site.members reversed %}
        <img src="{{ member.image }}" class="member__img">
        <div class="member__content">
            <h3 class="member__name">{{ member.name }}</h3>
            <h3 class="member__grade-major">{{ member.grade }}{{ member.major }}</h3>
        </div>
        {% endfor %}
    </div>
</div>

