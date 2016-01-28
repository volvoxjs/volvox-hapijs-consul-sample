import "babel-polyfill";

import {Cluster, GuidGenerator, FrameworkProvider, Configuration} from 'microphone-core';
import ConsulProvider from 'microphone-consul';
import HapiProvider from 'microphone-hapi';

import hapi from 'hapi'
import CustomerController from './customers'
import Logger from './logger'

async function main() {
    try {
        let server = new hapi.Server();
        let customers = new CustomerController();
        server.route({method: 'GET', path: '/customers', handler: customers.index});

        let logger = new Logger();
        let configuration = new Configuration();

        let clusterProvider = new ConsulProvider(null, logger);
        let frameworkProvider = new HapiProvider(configuration, logger);
        let guidGenerator = new GuidGenerator();
        let cluster = new Cluster(clusterProvider, frameworkProvider, guidGenerator);

        await cluster.bootstrap(server, "customers", "v1");
        console.log("STARTED");
    } catch (error) {
        console.error(error);
    }
}

main();
