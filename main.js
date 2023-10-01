import storage from "store";
// storage.set('token', '123456');


// Example custom build usage:
import engine from 'store/src/store-engine'

import localStorage from 'store/storages/localStorage'
import expirePlugin from 'store/plugins/expire';


let storages = [
  localStorage,
]
let plugins = [
  expirePlugin
]
let store = engine.createStore(storages, plugins)
storage.set('foo', 'bar', new Date().getTime() + 3000) 
storage.set('bbb', 'aaa');
setTimeout(() => {
  console.log(storage.get('foo'));
}, 4000);
