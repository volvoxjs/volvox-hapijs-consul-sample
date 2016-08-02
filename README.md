# volvox-hapijs-consul-sample
volvox.js hapijs and consul sample

![](https://avatars3.githubusercontent.com/u/16361502?v=3&s=200)  

### Sample

```js
import Volvox from 'volvox-core';
import vconsul from 'volvox-consul';
import vhapi from 'volvox-hapi';
import hapi from 'hapi'

async function main() {
    let server = new hapi.Server();
    server.route({ method: 'GET', path: '/customers', handler: (req, reply) => {
        reply({
            customerName: "Test customer",
            customerId: 666
        });
    }});

    let volvox = new Volvox(vconsul(), vhapi());
    await volvox.bootstrap(server, "customers", "v1");
}

main();
```
