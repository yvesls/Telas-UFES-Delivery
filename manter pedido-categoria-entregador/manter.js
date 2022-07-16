$(document).ready(() => {
    console.log($("#crudCategoria"))
    console.log($("#crudProdutos"))
    $("#menuCategorias").on( 'click', ()=>{
        $("#menuCategorias").addClass("active");
        $("#menuProdutos").removeClass("active");
        $("#menuEntregadores").removeClass("active");
        $("#menuConfiguracoes").removeClass("active");

        $("#crudCategoria").removeClass("d-none");
        $("#crudProdutos").addClass("d-none");
        $("#crudEntregadores").addClass("d-none");
        $("#menuConfiguracoes").addClass("d-none");
        console.log(document.getElementById("crudCategoria"))
    })
    
    document.getElementById("menuProdutos").addEventListener( 'click', ()=>{
        $("#menuProdutos").addClass("active");
        $("#menuCategorias").removeClass("active");
        $("#menuEntregadores").removeClass("active");
        $("#menuConfiguracoes").removeClass("active");

        $("#crudProdutos").removeClass("d-none");
        $("#crudCategoria").addClass("d-none");
        $("#crudEntregadores").addClass("d-none");
        $("#menuConfiguracoes").addClass("d-none");
        console.log(document.getElementById("crudPedidos"))
    })
    
    document.getElementById("menuEntregadores").addEventListener( 'click', ()=>{
        $("#menuEntregadores").addClass("active");
        $("#menuCategorias").removeClass("active");
        $("#menuProdutos").removeClass("active");
        $("#menuConfiguracoes").removeClass("active");

        $("#crudEntregadores").removeClass("d-none");
        $("#crudCategoria").addClass("d-none");
        $("#crudProdutos").addClass("d-none");
        $("#menuConfiguracoes").addClass("d-none");
        console.log(document.getElementById("crudPedidos"))
    })
})
