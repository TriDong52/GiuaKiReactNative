class EventBus {
    private events: { [event: string]: ((data: any) => void)[] } = {};
  
    on(event: string, callback: (data: any) => void) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(callback);
    }
  
    emit(event: string, data: any) {
      const callbacks = this.events[event];
      if (callbacks) {
        callbacks.forEach((callback) => {
          callback(data);
        });
      }
    }

    off(event: string, callback: (data: any) => void) {
      const callbacks = this.events[event];
      if (callbacks) {
        const index = callbacks.indexOf(callback);
        if (index !== -1) {
          callbacks.splice(index, 1);
        }
      }
    }
  }
  
  export default new EventBus();
  