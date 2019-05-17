
{# Variables #}

{% set submitButtonHTML = '<input type="submit" value="Log In"/>' %}
{% set loginHeaderText	= 'Log In' %}
{% set isAdminLogin 	= true %}
{% set totalSiteLogins 	= '2.00' %}

{% if isAdminLogin %} ADMIN {% endif %} {{ loginHeaderText }} 
<input type='text' value="" placeholder="username">
<input type='password' value="" placeholder="password">
{{submitButtonHTML |raw}}<br>
{{ totalSiteLogins |number_format }}
