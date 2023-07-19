AOS.init();

const datadoEvento = new Date("Apr 14, 2024 19:00:00");
const timeStampdoEvento = datadoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaateoEvento = timeStampdoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horasEmMs = 1000 * 60 * 60;
    const minutosEmMs = 1000 * 60;

    const diasAteoEvento = Math.floor(distanciaateoEvento / diaEmMs);
    const horasAteoEvento = Math.floor((distanciaateoEvento % diaEmMs) / horasEmMs);
    const minutosAteoEvento = Math.floor((distanciaateoEvento % horasEmMs) / minutosEmMs);
    const segundosAteoEvento = Math.floor((distanciaateoEvento % minutosEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteoEvento}d ${horasAteoEvento}h ${minutosAteoEvento}m ${segundosAteoEvento}s`

    if(distanciaateoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado'
    }
}, 1000);