RepoDir = os.getenv('PWD')
Host = "127.0.0.1"
Port = 80
ServerAdmin = "webmaster@localhost"
ServerName = "localhost"
ServerAlias = "localhost"
ProxyModule = true -- set to false if you would like to use rewrite rules
ProxyURL = "http://iridl.ldeo.columbia.edu"

if ProxyModule then
ProxyRules = [[
   ProxyPass /SOURCES ]]..ProxyURL..[[/SOURCES
   ProxyPass /expert ]]..ProxyURL..[[/expert
   ProxyPass /ds: ]]..ProxyURL..[[/ds:
   ProxyPass /home ]]..ProxyURL..[[/home
   ProxyPass /openrdf-sesame ]]..ProxyURL..[[/openrdf-sesame
]]
else
ProxyRules = [[
   RewriteRule ^/SOURCES/(.*) ]]..ProxyURL..[[/SOURCES/$1
   RewriteRule ^/expert/(.*) ]]..ProxyURL..[[/expert/$1
   RewriteRule ^/ds:/(.*) ]]..ProxyURL..[[/ds:/$1
   RewriteRule ^/home/(.*) ]]..ProxyURL..[[/home/$1
   RewriteRule ^/openrdf-sesame/(.*) ]]..ProxyURL..[[/openrdf-sesame/$1
]]
end

