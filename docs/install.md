## before install
+ if you use composer, the `zip` and `unzip` must be installed. `apt-get install zip unzip`
+  your need install php extensions `mbstring dom curl zip` determined which version of you php, e.g. if you use php7.0, installed extensions like this `apt-get install php7.0-mbstring`.


## install
+ install october CMS `composer create-project october/october chicken-soup`
+ make `storage` and `themes` directory is writable `chmod -R 777 storage themes`
+ run `php artisan october:install` in project root directory
+ make `storage` and `themes` directory writable.
+ before run `php artisan october:update`,you need run `composer update` first.
+ remove some files, `rm .gitignore README.md`
+ install dependence plugins
    - install october.drivers `php artisan plugin:install October.Drivers`
    - install rainlab.user `php artisan plugin:install RainLab.User`
+ clone this repository
    - under the project root directory,run `git init` 
    - run `git remote add origin https://github.com/buuug7/chicken-soup.git`
    - run `git pull origin master`
+ after pull complete
    - install buuug7.soup `php artisan plugin:refresh Buuug7.Soup`
    - config your email
        * default the configuration is under `config/dev/mail.php`
        * email config detail [email](https://github.com/buuug7/chicken-soup/blob/master/docs/mail.md) 
+ run `php artisan october:env` generate a `.env` file for common config
        
## usage
+ bs4 theme
    - compile SCSS file with `npm run build`, if watch use `npm run watch`         
