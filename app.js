function calcular(){
    
    let horas = parseInt(document.querySelector('#horas').value)
    let minutos = parseInt(document.querySelector('#minutos').value)
    let qtdPessoas = parseInt(document.querySelector('#pessoas').value)

    var converterHoras = ((horas * 60) + minutos) / qtdPessoas 
    
    if(converterHoras >= 60 && converterHoras <= 119){
        var restosMinutos = converterHoras - 60
    }else if(converterHoras >= 120 && converterHoras <= 179){
        var restosMinutos = converterHoras - 120 
    }else if(converterHoras >= 180 && converterHoras <= 239){
        var restosMinutos = converterHoras - 180
    }else if(converterHoras >= 240 && converterHoras <= 299){
        var restosMinutos = converterHoras - 240
    }else if(converterHoras >= 300 && converterHoras <= 359){
        var restosMinutos = converterHoras - 300
    }else if(converterHoras >= 360 && converterHoras <= 179){
        var restosMinutos = converterHoras - 360
    }

    if(converterHoras >= 60 && converterHoras <= 119){
        converterHoras = 1
    }else if(converterHoras >= 120 && converterHoras <= 179){
        converterHoras = 2
    }else if(converterHoras >= 180 && converterHoras <= 239){
        converterHoras = 3
    }else if(converterHoras >= 240 && converterHoras <= 299){
        converterHoras = 4
    }else if(converterHoras >= 300 && converterHoras <= 359){
        converterHoras = 5
    }else if(converterHoras >= 360 && converterHoras <= 419){
        converterHoras = 6
    }

    let somarMinutos = minutos + restosMinutos

    if(somarMinutos < 60){
        var totalMinutos = somarMinutos
    }else if(somarMinutos >= 60 && somarMinutos <= 119){
        var totalMinutos = somarMinutos - 60
    }else if(somarMinutos >= 120 && somarMinutos <= 179){
        var totalMinutos = somarMinutos - 120
    }else if(somarMinutos >= 180 && somarMinutos <= 239){
        var totalMinutos = somarMinutos - 180
    }else if(somarMinutos >= 240 && somarMinutos <= 299){
        var totalMinutos = somarMinutos - 240
    }else if(somarMinutos >= 300 && somarMinutos <= 360){
        var totalMinutos = somarMinutos - 300
    }

    if(totalMinutos >= 60 && totalMinutos <= 119){
        converterHoras = 1
    }else if(totalMinutos >= 120 && totalMinutos <= 179){
        converterHoras = 2
    }else if(totalMinutos >= 180 && totalMinutos <= 239){
        converterHoras = 3
    }else if(totalMinutos >= 240 && totalMinutos <= 299){
        converterHoras = 4
    }else if(totalMinutos >= 300 && totalMinutos <= 359){
        converterHoras = 5
    }else if(totalMinutos >= 360 && totalMinutos <= 419){
        converterHoras = 6
    }

    if(restosMinutos < 10){
        document.querySelector('#paragrafo').innerHTML = converterHoras +' : 0'+ parseInt(restosMinutos)
    }else{
        document.querySelector('#paragrafo').innerHTML = converterHoras +' : '+ parseInt(restosMinutos)
    }

    

}