import io from 'socket.io-client';
import {Observable} from 'rxjs';

class socketio {
    state = {
        socket:null,
    };
    constructor() {
        this.state.socket = io.connect('http://18.191.149.21:5000/update');

        this.state.socket.emit('join','{"username":"Rodrigo Alves","room":"providers"}');

        //this.state.socket.emit('new','{"username":"Rodrigo","room":"providers","message":"Hello everyone!"}');

    }
  
    listen = event => {

        return new Observable(observer => {
    
            this.state.socket.on(event, data => {
                observer.next(data);
            });
    
            // // observable is disposed
            // return () => {
            //     this.socket.off(event);
            // };
        });
    
    }
}
  
  
  
export { socketio };