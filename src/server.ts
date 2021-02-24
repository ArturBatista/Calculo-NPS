import express from 'express';

const app = express();

app.get("/",(request, response)=>{

    return response.json({message: "Hello Worlds - NLW04"} );
    //return response.send("Hello World - NWL#4");
});

//1 para => Rota(recurso Api)
//2 param => request, response

app.post("/users", (request, response)=>{

    //Recebeu os dados para salvar
    return response.json({
        message: "Os dados foram salvos com sucesso!"
    });
});

app.listen(3333, ()=> console.log("Server is running!"));