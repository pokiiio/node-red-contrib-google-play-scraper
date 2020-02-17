# node-red-contrib-google-play-scraper

Get reviews on Google Play.


## About this node

This node scrapes infomation on Google Play, and gets reviews of a configured app.


## Settings

This node requires following parameters.


### appId

A package name which you want reviews of.

### lang

A language code to specify review language. Default is `en`.

### country

A language code to specify review country. Default is `us`.

### sort 

`NEWEST`, `RATING`, or `HELPFULNESS`. Default is `NEWEST`.

### num

A number of reviews you want. Default is `100`.


## Usage

If this node is triggered, review information is notified to next node.

## Special Thanks

 - https://www.npmjs.com/package/google-play-scraper