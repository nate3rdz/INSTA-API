# INSTA-API
A simple API to create a connection to Instagram servers and to retrieve media_urls.

HOW-TO-USE:

1) Get your Instagram Long-Live access token. You can find all the steps in this guide: https://developers.facebook.com/docs/instagram-basic-display-api/getting-started
2) Insert your instagram token in /api/routes.js -> access_token
3) Remember to put, somewhere in your code, a call to the endpoint api/getInstagramToken, that constantly refreshes the token (otherwise, it will expires)
4) Call the endpoint api/getInstagramImages to get the images from the Instagram profiles: the images will be provided as media urls.
