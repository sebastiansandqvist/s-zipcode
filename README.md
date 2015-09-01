# s-zipcode
## Made for Let's Join Paws

This module returns all zip codes given a state. Zip codes are an array of objects including the properties:

* `cityState` {String}
* `latitude` {Number}
* `longitude` {Number}
* `zip.` {String}

Takes up a ton of memory and should only be used once to save these records to a database.