export  class ScanData {
    
    tipo:string;
    texto:string;
    constructor(texto:string) {
        this.texto = texto;

        this.tipo= "No Definido"

        if(texto.startsWith("http"))
            this.tipo = "Http"
       
        
    }
}