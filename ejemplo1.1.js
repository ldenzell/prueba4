function pregunta(respu1){
    var resultado ="En que universidad estudias: " + respu1;
        return resultado;
}
 
test("Mi Primera Prueba",function () {
    ok(pregunta("ucatec",),"Satisfactorio");

    //notequal(pregunta, "udabol");
});