self.addEventListener("install", event => {
    console.log("sw instalado")
});

self.addEventListener("activate", event =>{
    console.log("sw activado y controlando la app")
})

self.addEventListener('fetch', event => {
    if(event.request.url.includes('.jpg')){
        let response = fetch('/img/1.jpg')
        console.log("es una imagen")
        event.respondWith(response)
    }

    if(event.request.url.includes('style.css')){
        let response = new Response(`
        body{
            background-color:black !important;
            color: red;
        },`,{
            headers: {
                'Content-Type': 'text/css'
            }
        })
        event.respondWith(response)
    }
})