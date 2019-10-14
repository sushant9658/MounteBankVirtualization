const mbHelper = require('./mountebank-helper');
const settings = require('./settings');

function addService(){
    const response = {message: "Hello World"}

    const stubs = [
        {
            predicates : [
                {
                    equals: {
                        method: "GET",
                        "path": "/"
                    }
                }
            ],

            responses: [
                {
                    is:{
                        statusCode:200,
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(response)
                    }
                }
            ]
        }
    ];


    const imposter = {
        port:settings.hello_service_port,
        protocol:'http',
        stubs: stubs
    };

    console.log(settings.hello_service_port);

return mbHelper.postImposter(imposter);
}

module.exports= {addService};