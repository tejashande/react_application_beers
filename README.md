The application has been deployed on Heroku and can be accessed by https://react-application-beers.herokuapp.com. Automatic deploy is enabled for the master branch.

Below are the list of requirements:
- Display a list of all the beers.
- If a user selects a beer, present them a detail page.
- Add functionality that allows a user to "favourite" a beer.  This should only be done in memory and should reset if the browser is refreshed.
- If a user "favourites" a beer, add it to another list that keeps track of his/her favourites.
- The favourites list should include functionality to remove a beer from the list.

The following web service are created for **beers** in Node.js and backend is MongoDB:

TYPE | Details
---- | ------
Get | https://punk-web-service.herokuapp.com/api/beers/{id}
Put | https://punk-web-service.herokuapp.com/api/beers/{id}
Post | https://punk-web-service.herokuapp.com/api/beers/{id}
Delete | https://punk-web-service.herokuapp.com/api/beers/{id}

The following web service are created for **favorites** in Node.js and backend is MongoDB:

TYPE | Details
---- | ------
Get | https://punk-web-service.herokuapp.com/api/favorite/{id}
Put | https://punk-web-service.herokuapp.com/api/favorite/{id}
Post | https://punk-web-service.herokuapp.com/api/favorite/{id}
Delete | https://punk-web-service.herokuapp.com/api/favorite/{id}

_`The services are not consumed in the application with respect to the requirements but can be used in the future.`_