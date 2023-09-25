
class MyService {
    constructor(eventEmitter) {
        this._eventEmitter = eventEmitter;
    }

    accessRoute(routeName) {
        try {
            console.log(`Accessing ${routeName} route`);
            this._eventEmitter.emit('routeAccess', routeName);
        }
        catch (e) {
            console.log(e);
        }
    }
}

module.exports = MyService;