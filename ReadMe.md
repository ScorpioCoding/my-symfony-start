## Symfony 4.1 Project Start-Up 

I created this repo so that I can start up symfony 4.1 projects faster.
This is based upon the Symfony/Skeleton.
---

### Using this project.
1. Clone the repo
    - ssh : ```git@github.com:ScorpioCoding/my-symfony-start.git```
     - https : ```https://github.com/ScorpioCoding/my-symfony-start.git```
2. Point the project to your Repo
    ```
    $ git remote set-url origin <your repo link>
    $ git remote add upstream <your repo link>
    $ git push origin master
    $ git push --all
    -> 'Eveything up to date'
    ```
3. Use YARN or NPM
    ```` $ yarn install ````
    ```` $ npm install ````
 

### Init Symfony
1. Create + Server
    ``` 
    composer create-project symfony/symfony-skeleton
    cd skeleton
    composer require symfony/web-server-bundle --dev
    php bin/console server:run
    ```
    > [Symfony Doc's Setup](https://symfony.com/doc/current/setup.html)  
    OK up & running
    

2. Checking for Security Vulnerabilities  
    ```
    composer require sensiolabs/security-checker --dev
    ```
    > OK up & running
    
3. Profiler
    ```
    composer require symfony/web-profiler-bundle
    composer require symfony/twig-bundle
    composer require twig/extensions
    php bin/console server:run
    ```
    > [Symfony Doc's Profiler](https://symfony.com/doc/current/profiler.html)  
    OK up & running
    
4. Controller - Routes - Annotations
    ```
    composer require annotations
    composer require symfony/maker-bundle --dev
    php bin/console make:controller blog
    	=> created: src/Controller/BlogController.php
    	=> created: templates/blog/index.html.twig
    ```
    > [Symfony Doc's Page Creation](https://symfony.com/doc/current/page_creation.html)  
    OK up & running
    
5. Security
    ```
    composer require symfony/security-bundle
    ```
    > [Symfony Doc's Security](https://symfony.com/doc/current/security.html)   
    NOK - Needs Setup & Database Configuration

6. Forms
    ```
    composer require symfony/form
    ```
    > [Symfony Doc's Forms](https://symfony.com/doc/current/forms.html)  
    NOK Needs testing

7. ORM & Doctrine
    ```
    composer require symfony/orm-pack
    ```
    > [Symfony Doc's ORM & Doctrine](https://symfony.com/doc/master/doctrine.html)  
     NOK Needs Setup & Database Configuration  
     ! idea : create remote dB config with Hosting dB

8. Email
    ```
    composer require symfony/swiftmailer-bundle
    ```
    > [Symfony Doc's Email](https://symfony.com/doc/master/email.html)  
    NOK Needs config and testing

9. Assets
    ```
    composer require symfony/asset 
    ```
    > [Symfony Doc's Assets](https://symfony.com/doc/master/components/asset.html)   
    NOK Needs Testing 

10. Serialization
    ``` 
    composer require sensio/framework-extra-bundle
    ```
    > [Symfony Doc's Serialization](https://symfony.com/doc/master/serializer.html) 

11. PhpStorm IDE - mod .gitignore file
    ``` 
    ###> php-storm ###
        .idea/*
    ###< php-storm  ###
    ```
    > OK Up & Running

12. Webpack Encore
    ```
    composer require webpack-encore
    yarn install 
    ```
    > [Symfony Doc's Encore](https://symfony.com/doc/current/frontend.html) 
    
13. ESlint
    ``` 
    npm i --save-dev eslint
    eslint --init
    ```
    > EsLint Init  
        - Use a popular style guide --> Standard
        - Output filetype --> Json
        - Install dependencies --> yes

---


