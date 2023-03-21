//Quemar una base de datos 

//modularizar el codigo 


export let productos=Array(
    {
        nombre:"Milwaukee Brewers",
        descripcion:"New Era Gorras Milwaukee Brewers - MLB Batting Practice Low Profile 59Fifty Fitted - Azules - Colombia QKOUF83",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen1.jpg?alt=media&token=57436481-e73f-4bf3-807c-1cef7fe3d7e9","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen1-2.jpg?alt=media&token=ed91e082-736e-4b63-8f58-fc99ea98cb56"],
        precio:244000,
        popularidad:4.5,        
    },
    {
        nombre:"Philadelphia Eagles",
        descripcion:"New Era Gorras Philadelphia Eagles - NFL Tiger Flect 9Twenty Adjustable - Negras - Colombia TZRDV69",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen2.jpg?alt=media&token=427fd4f4-0d3d-46b3-b974-6a49727eb0be","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen2-2.jpg?alt=media&token=9b377101-a860-4c62-97e9-cd72e723264f"],
        precio:13600,
        popularidad:4.5,
    },
    {
        nombre:"Los Angeles Chargers",
        descripcion:"New Era Gorras Los Angeles Chargers - NFL Official Fall Sideline  Stretch Fit - Gris - Colombia CAYVF25",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen3.jpg?alt=media&token=a12651b6-70e6-4642-9d96-d645f5374efa","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen3-2.jpg?alt=media&token=9016e1b6-d57f-419a-af81-8662138d7ae9"],
        precio:150000,
        popularidad:4.5,
        
    },
    {
        nombre:"Los Angeles Clippers",
        descripcion:"New Era Gorras Los Angeles Clippers - NBA Icon 59Fifty Fitted - Azules - Colombia PROJG16",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen4.jpg?alt=media&token=c45146c4-0a9c-42ae-b59a-b85cdef81572","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen4-2.jpg?alt=media&token=493aafbc-8415-45fa-9ec2-a62de9e9c82e"],
        precio:127477,
        popularidad:4.5,
    },
    {
        nombre:"Pittsburgh Pirates Knit",
        descripcion:"New Era Gorros Pittsburgh Pirates - MLB Sport Knit - Negras - Colombia HJLKM75",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen5.jpg?alt=media&token=33c2ede7-b890-4fa9-97b1-64a3b2628691","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen5-2.jpg?alt=media&token=4f649eb2-2231-4370-84e7-854003855904"],
        precio:42900,
        popularidad:4.5,
    },    
    {
        nombre:"Cleveland Indians",
        descripcion:"New Era Gorras Cleveland Indians - MLB Clubhouse Collection Low Profile 59Fifty Fitted - Azules - Colombia ZVWAC03",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen6.jpg?alt=media&token=11745699-ced2-485e-a0b0-1cd739a26eb6","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/gorra6-2.jpg?alt=media&token=983a57e1-e813-4f4d-9ff6-4b8dfeb0e3fa"],
        precio:190000,
        popularidad:4.5,        
    },
    {
        nombre:"Chicago White Sox",
        descripcion:"New Era Gorras Chicago White Sox - MLB Batting Practice 39Thirty Stretch Fit - Negras - Colombia PJLRK04",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen7.jpg?alt=media&token=e95c8908-8fa2-46a3-b95f-36201ce48353","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen7-2.jpg?alt=media&token=63df56ca-dfff-4d70-a9fa-3242adc49de2"],
        precio:90000,
        popularidad:4.5,
    },
    {
        nombre:"Detroit Lions Cuff Knit",
        descripcion:"New Era Gorros Detroit Lions - NFL Salute To Service Cuff Knit - Negras - Colombia WRBTM75",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen8.jpg?alt=media&token=3253a360-1b8b-44b1-b8e1-7589022b1d60","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen8-2.jpg?alt=media&token=c8dfe0d9-dacc-400e-963f-40b967f7a5d5"],
        precio:96326,
        popularidad:4.5,
        
    },
    {
        nombre:"New Era Gorras Charlotte Hornets",
        descripcion:"New Era Gorras Charlotte Hornets - NBA Heather Low Profile 59Fifty Fitted - Gris - Colombia FWQOX69",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen9.jpg?alt=media&token=35337f61-464e-4546-a3eb-f9a73f5bc37a","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen9-2.jpg?alt=media&token=74262c33-ad87-46b7-8ebb-57c4ecec7c8d"],
        precio:165000,
        popularidad:4.5,
    },
    {
        nombre:"Chicago Bulls",
        descripcion:"New Era Gorras Chicago Bulls - NBA Snakeskin 9Fifty Snapback - Rojas - Colombia ZYKNJ80",
        fotos:["https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen10.jpg?alt=media&token=dffcffc1-dc9f-41e0-9dbc-28fd8ee71533","https://firebasestorage.googleapis.com/v0/b/svrtienda.appspot.com/o/imagen10-2.jpg?alt=media&token=deae38ed-e559-47ca-ad24-6193b0f9f20a"],
        precio:130000,
        popularidad:4.5,
    }
    )
