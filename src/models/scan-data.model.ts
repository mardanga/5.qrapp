export  class ScanData {
    
    tipo:string;
    texto:string;
    constructor(texto:string) {
        this.texto = texto;
    
        this.tipo= "No Definido"

        if(texto.startsWith("http"))
        {    
            this.tipo = "Http";
        }
        else if(texto.startsWith("geo")){
            this.tipo = "Mapa";
        }
        else if(texto.startsWith("BEGIN:VCARD")){
            this.tipo = "Contacto";
        }
        else if(texto.startsWith("MATMSG")){
            this.tipo = "Correo";
        }

       
        
    }
}