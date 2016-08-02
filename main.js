import "babel-polyfill";

import Volvox from 'volvox-core';
import vconsul from 'volvox-consul';
import vhapi from 'volvox-hapi';
import hapi from 'hapi'

async function main() {
    let server = new hapi.Server();
    server.route({method: 'GET', path: '/customers', handler: (req, reply) => {
        reply({
            customerName: "Test customer",
            customerId: 666
        });
    }});

    let volvox = new Volvox(vconsul(), vhapi());
    await volvox.bootstrap(server, "customers", "v1");
}

main();
