
// type for listener/callback functions
type Listener = (...argument: any) => void;

type Events = { [eventName: string]: Listener[] }


/**
 * Events and event emitter.
 * To be extended in some classes that may have events.
 * 
 */
export abstract class EventEmitter{

    constructor(){
        
        this._events = {};
    }

    /**
     * `events` properties is an object that can hold many event `name` added via {@link EventEmitter.$on | $on} method.
     * 
     * Every event `name` properties holds an array where the listeners will be added via `array.push(listener)` 
     */
    private _events : Events;

    
    /**
     * $on method add new listener function to the `name` property of the the object.
     * 
     * @param name The name of the event where the listener (callback function) will be pushed. Some call it `type`
     * @param listener Callback function that will listen to the passed event `name`
     * 
     */
    public $on(name : string , listener : Listener ) {
        
        //if the `name` does not exist, add it as new propery of `events` and assign [] array as default value
        if ( !this._events[name] ){
            this._events[name] = []
        }

        // add the listener to the `name` event
        this._events[name].push( listener )
        
    }

    /**
     * Emit an event `name` and invoke all the listeners (callback function)
     * @param name The name of the event to emit.
     * @param data The additional data to supply listeners parameters.
     */
    public $emit(name: string , data : any[] ){

        //if the event `name` passed exists, loop every listener functions and invoked it
        if (this._events[name]) {
            this._events[name].forEach(listener => {
                listener.apply(null, data );
            });
        }

    }
}
