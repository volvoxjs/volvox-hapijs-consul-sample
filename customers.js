export default class CustomerController {
    index(req, reply) {

        reply({
            customerName: "Test customer",
            customerId: 666
        });
    }
}