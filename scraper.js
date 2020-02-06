module.exports = function (RED) {
    function ScraperNode(config) {
        RED.nodes.createNode(this, config);
        let node = this;
        let scraper = require('google-play-scraper');

        node.on('input', function (msg) {
            let option = {};

            if (config.appId) {
                option.appId = config.appId;
            }
            if (config.lang) {
                option.lang = config.lang;
            }
            if (config.country) {
                option.country = config.country;
            }
            if (config.sort) {
                switch (config.sort) {
                    case 'HELPFULNESS':
                        option.sort = 1;
                        break;
                    case 'NEWEST':
                        option.sort = 2;
                        break;
                    case 'RATING':
                        option.sort = 3;
                        break;
                }
            }
            if (config.num > 0) {
                option.num = config.num;
            }

            scraper.reviews(option)
                .then(result => {
                    msg.payload = result;
                    node.send(msg);
                });
        });
    }
    RED.nodes.registerType("scraper", ScraperNode);
}