const settings = {
  "name": "sarachandlee",
  "state": {
    "frontity": {
      "url": "https://www.sarachandlee.com",
      "title": "Test Frontity Blog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "sarachandlee",
      "state": {
        "theme" : {
          "menu": [
            ["About", "/about-sara"],
            ["Portfolio", "/portfolio"],
            ["Blog", "/blog"],
            ["Let's Talk", "lets-talk"]
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.sarachandlee.com",
          "homepage": "/",
          "postsPage": "/blog",
          "postTypes": [
            {
              type: "portfolio",
              endpoint: "portfolio",
              archive: "/portfolio"
            }
          ],
          "taxonomies": [
            {
              taxonomy: "portfolio_tag",
              endpoint: "portfolio_tag",
              postTypeEndpoint: "portfolio",            
            }
          ]
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
