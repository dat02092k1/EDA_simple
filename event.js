// event.js
class EventHandlers {

    constructor(eventEmitter) {
            this._eventEmitter = eventEmitter;
    }

    registerRouteEventHandlers() {
        console.log('Events fireup');

        this._eventEmitter.on('routeAccess', (route) => {
            try {
                EventHandlers.annouceRouteAccess(route);
                EventHandlers.upgradeSecutiry(route);
            }
            catch (e) {
                console.log(e);
            }
        })
    }

    static annouceRouteAccess(route) {
        console.log(`${route} has been accessed`)
    }

    static upgradeSecutiry(route) {
        console.log(`Locking all other routes and initiating higher security measures on ${route} route`)
    }
}

module.exports = EventHandlers;