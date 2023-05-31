function calc(){
    let x = parseInt( document.getElementById("x").value);
    let y = parseInt( document.getElementById("y").value);
    let operators = document.getElementById("operators").value;
    if ( operators === "+")
    {
         document.getElementById("result").value = x+y;
    }
    if(operators === "-")
    {
        document.getElementById("result").value = x-y;
    }
    if(operators === "/")
    {
        document.getElementById("result").value = x/y;
    }
    if(operators === "X")
    {
        document.getElementById("result").value = x*y;
    }

}