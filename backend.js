// Importar el paquete 'express' para poder usarlo
const express = require('express')

//Importar el paquete de el error CORS
const cors = require('cors')
 
// Inicializamos una instancia express
// app se vuelve el servidor    
const app = express()

app.use(cors())
// Declarar un puerto
const PORT = 3000

app.get('/:categoria/:puntos', (req, res) => {
    console.log(res.params.puntos)
 })

let preguntas ={
    "css":[
        {
            "100":"Que es CSS?"
        },
        {
            "200":"que es CSS?"
        },
        {
            "300":"que es CSS?"
        },
        {
            "400":"que es CSS?"
            
        },
        {
            "500":"que es CSS?"
        }
    ],
    "JS":[
        {
            "100":"Que es CSS?"
        },
        {
            "200":"que es CSS?"
        },
        {
            "300":"que es CSS?"
        },
        {
            "400":"que es CSS?"
        },
        {
            "500":"que es CSS?"
        }
    ],
    "HTML":[
        {
            "100":"Que es CSS?"
        },
        {
            "200":"que es CSS?"
        },
        {
            "300":"que es CSS?"
        },
        {
            "400":"que es CSS?"
        },
        {
            "500":"que es CSS?"
        }
    ],
    "lenguajes":[
        {
            "100":"Que es CSS?"
        },
        {
            "200":"que es CSS?"
        },
        {
            "300":"que es CSS?"
        },
        {
            "400":"que es CSS?"
        },
        {
            "500":"que es CSS?"
        }
    ],
    "syntax":[
        {
            "100":"Que es CSS?"
        },
        {
            "200":"que es CSS?"
        },
        {
            "300":"que es CSS?"
        },
        {
            "400":"que es CSS?"
        },
        {
            "500":"que es CSS?"
        }
    ]
}

app.listen(PORT, () => {
    console.log(`SUBI ${PORT}`)
})