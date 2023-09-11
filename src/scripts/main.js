AOS.init();

const dataDoEvento = new Date ("Oct 22, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();
    const distanciaEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteEvento = Math.floor(distanciaEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s`;

    if(diasAteEvento<0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = ' </br> O Evento deste ano já aconteceu! Fique ligado para as próximas informações.'
    }
},1000); 
