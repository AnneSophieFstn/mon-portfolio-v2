# Publish React project on GitHub Pages =)

### 1. Install the  `gh-pages`  npm package

Install [`gh-pages`](https://github.com/tschaub/gh-pages)  npm package:
    
    $ npm install gh-pages --save-dev
    

### 2. Add  `homepage`  in `package.json` file

``` 
"homepage": "FULL-LINK-PROJECT"
```

### 3. Add deployment scripts to the `package.json` file
```
"predeploy": "npm run build",
"deploy": "gh-pages -d docs"
```


### 4. Push the React app to the GitHub repository
	
	$ npm run deploy

### 5. Configure GitHub Pages


In your repository github, go to ```Settings``` --> ```Pages```
Choose ```gh-pages``` and ```root```
```Save``` and visite your link --> `https://gitname.github.io/namerepo`.

Enjoy :)
