# chicken soup based on October CMS

## install
+ install october CMS `composer create-project october/october chicken-soup`
+ setting `disabledCoreUpdates=>true` in `config/cms.php` file
+ run `php artisan october:install` in project root directory
+ run `php artisan october:env` generate a `.env` file for common config
+ make `storage` and `themes` directory writable.
+ before run `php artisan october:update`,you need run `composer update` first.
+ remove some files, `rm .gitignore README.md`
+ install dependence plugins
    - install october.drivers `php artisan plugin:install October.Drivers`
    - install rainlab.user `php artisan plugin:install RainLab.User`
+ clone this repository
    - in the project root directory,run 'git init'
    - run `git remote add origin https://github.com/buuug7/chicken-soup.git`
    - run `git pull origin master`
+ after pull complete
    - install buuug7.soup `php artisan plugin:refresh Buuug7.Soup`

## usage
+ bs4 theme
    - compile scss file with `npm run build`, if watch `npm run watch`    
    
    
## 文档
+ [1](https://github.com/buuug7/chicken-soup/blob/master/docs/1.md)
+ [2](https://github.com/buuug7/chicken-soup/blob/master/docs/2.md)
+ [3](https://github.com/buuug7/chicken-soup/blob/master/docs/3.md)
+ [4](https://github.com/buuug7/chicken-soup/blob/master/docs/4.md)   
+ [email](https://github.com/buuug7/chicken-soup/blob/master/docs/mail.md) 
            