# s-zipcode
## Made for one-time use on letsjoinpaws.com

Not recommended for production use.

This module returns all zip codes given a state. Zip codes are an array of objects including the properties:

* `cityState` {String}
* `latitude` {Number}
* `longitude` {Number}
* `zip.` {String}

Warning: Takes up a ton of memory and should only be used once to save these records to a database.