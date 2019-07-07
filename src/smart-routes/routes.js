class RouteList {
  routes = new Map();
  subscribers = new Set();

  add(name, route) {
    this.routes.set(name, route);
    this.emitUpdate();
  }

  remove(name) {
    this.routes.delete(name);
    this.emitUpdate();
  }

  has(name) {
    return this.routes.has(name);
  }

  get(name) {
    return this.routes.get(name);
  }

  onUpdate(method) {
    this.subscribers.add(method);
    const unsubscriber = () => {
      this.subscribers.delete(method);
    };
    return unsubscriber;
  }

  emitUpdate() {
    this.subscribers.forEach(method => {
      try {
        method();
      } catch (err) {
        console.error(`RouteList caught an error in a subscriber`, err.stack);
      }
    });
  }
}
const instance = new RouteList();

export default instance;
