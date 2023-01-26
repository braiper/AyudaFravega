class Pedido{
    constructor(nombre_tienda,cliente,direccion_facturacion,direccion_envio,datos_facturacion,detalle_pedido,cobranza,producto){
        this.tienda = nombre_tienda
        this.cliente = cliente,
        this.direccion_facturacion = direccion_facturacion,
        this.envio = direccion_envio,
        this.facturacion = datos_facturacion,
        this.detalle = detalle_pedido,
        this.cobranza = cobranza,
        this.producto = producto
    }
    
}

class Tienda{
    constructor(identificador){
        this.identificador = identificador
    }
}

class Cliente{
    constructor()
}