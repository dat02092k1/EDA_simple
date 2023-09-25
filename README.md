this is just a simple example of Event Drivent Architecture using Nodejs

-------------------------------------------------------------------------- 

to run, just use command: node index

--------------------------------------------
flow of EDA:

// event.js
First, we import the event emitter. Next up we create a class EventHandlers. After that we create an eventEmitter property and assign the EventEmiiter type to it and also make it private to this class, so it can only be accessed within this class. Next, we initialize this event using a constructor, assigning the eventEmitter property of our class to the eventEmitter supplied. Next up we create our method ‘routeEventHandlers’ which would listen for all events as regards route access. We could have multiple methods for handling different events.

Inside the ‘registerRouteEventHandlers’ method we just print a message to show that this event handler is up and running. Then we define our events. We would be going with just one event for now ‘routeAcess’. We can take in data that will be passed/sent anytime the occurrence of this event is declared. For this case, we would be supplying the route's name. With this information, we can perform various actions, but for the sake of this article, I would just be printing simple messages. Our event would perform 2 actions, one would be a function that announces that a route has been accessed, and another that announces that we are upgrading security.

// service.js
First, We import the EventEmitter from the events. We then create our class and then create a eventEmitter property private to this class that we would use to declare the occurrence of our events. We then initialize it using a constructor. Next up, we create a method that takes in the route’s name. In this method, We would simply just print a basic message, and then emit(declare/announce) the event ‘routeAccess’.

// index.js
import express, the request and response types, then the eventHandlers we created from our event file, then our service class from the service file. Finally, we import the EventEmitter from the events package

