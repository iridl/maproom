Build
-----

To build maproom you need the following software:

* Java 1.6.0_10+
* GNU Make 3.81+
* Unix shell
* Raptor 1.4.18+
* semantic_tools 1.2.0+

Apache Configuration
--------------------


Directory::

	<Directory "/var/www/html/proto">
	    AddType application/json .json
	    AddCharset UTF-8 .json
	    Options Indexes FollowSymLinks MultiViews
	    AllowOverride All
	        LanguagePriority en es de fr
	        ForceLanguagePriority Prefer Fallback
	</Directory>

Rewrite rules::

	RewriteEngine On
	RewriteRule /?Set /index.html?Set
	RewriteCond %{QUERY_STRING} Set-Language=([^&]+)
	RewriteRule (.*)\.(html|json) $1.$2.%1 [E=prefer-language:%1,L]

