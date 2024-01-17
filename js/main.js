document.addEventListener('DOMContentLoaded',function(){
    const monthsBr = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    const tableDays = document.getElementById('dias');
    const abaEvento = document.getElementById('eventos');
    function GetDaysCalendar(mes,ano){
        document.getElementById('mes').innerHTML = monthsBr[mes];
        document.getElementById('ano').innerHTML = ano;

        let firstDayOfWeek = new Date(ano,mes,1).getDay()-1;
        let getLastDayThisMonth = new Date(ano,mes+1,0).getDate();
        for(var i = -firstDayOfWeek,index = 0; i < (42-firstDayOfWeek); i++,index++){
            let dt = new Date(ano,mes,i);
            let dtNow = new Date();
            let dayTable = tableDays.getElementsByTagName('td')[index];
            let eventos = abaEvento.getElementsByTagName('li')[index];
            dayTable.classList.remove('event');
            dayTable.classList.remove('mes_ant');
            dayTable.classList.remove('prox_mes');
            dayTable.classList.remove('dia_atual');
            dayTable.innerHTML = dt.getDate();

            if((dt.getFullYear() == dtNow.getFullYear()) && (dt.getMonth() == dtNow.getMonth()) && (dt.getDate() == dtNow.getDate())){
                dayTable.classList.add('dia_atual')
            }
            if(i < 1){dayTable.classList.add('mes_ant')}
            if(i > getLastDayThisMonth){dayTable.classList.add('prox_mes')}

            var janwrc = [25,26,27,28];
            var fevwrc = [15,16,17,18];
            var marwrc = [28,29,30,31];
            var abrwrc = [18,19,20,21];
            var maiwrc = [9,10,11,12,30,31];
            var junwrc = [1,2,27,28,29,30];
            var julwrc = [18,19,20,21];
            var agowrc = [1,2,3,4];
            var setwrc = [5,6,7,8,26,27,28,29];
            var outwrc = [31];
            var novwrc = [1,2,3,21,22,23,24];

            var fevf1 = [29];
            var marf1 = [1,2,7,8,9,22,23,24];
            var abrf1 = [5,6,7,19,20,21];
            var maif1 = [3,4,5,17,18,19,24,25,26];
            var junf1 = [7,8,9,21,22,23,28,29,30];
            var julf1 = [5,6,7,19,20,21,26,27,28];
            var agof1 = [23,24,25,30,31];
            var setf1 = [1,20,21,22];
            var outf1 = [18,19,20,25,26,27];
            var novf1 = [1,2,3,21,22,23,29,30];
            var dezf1 = [6,7,8];

            var marwec = [2];
            var abrwec = [21];
            var maiwec = [11];
            var junwec = [15];
            var julwec = [14];
            var setwec = [1];
            var novwec = [2];


            if(dt.getMonth() == 0 && janwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}

            if(dt.getMonth() == 1 && fevwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 1 && fevf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}

            if(dt.getMonth() == 2 && marwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 2 && marf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}
            if(dt.getMonth() == 2 && marwec.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wec');}

            if(dt.getMonth() == 3 && abrwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 3 && abrf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}
            if(dt.getMonth() == 3 && abrwec.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wec');}

            if(dt.getMonth() == 4 && maiwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 4 && maif1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}
            if(dt.getMonth() == 4 && maiwec.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wec');}

            if(dt.getMonth() == 5 && junwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 5 && junf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}
            if(dt.getMonth() == 5 && junwec.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wec');}

            if(dt.getMonth() == 6 && julwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 6 && julf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}
            if(dt.getMonth() == 6 && julwec.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wec');}

            if(dt.getMonth() == 7 && agowrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 7 && agof1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}

            if(dt.getMonth() == 8 && setwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 8 && setf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}
            if(dt.getMonth() == 8 && setwec.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wec');}

            if(dt.getMonth() == 9 && outwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 9 && outf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}

            if(dt.getMonth() == 10 && novwrc.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wrc');}
            if(dt.getMonth() == 10 && novf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}
            if(dt.getMonth() == 10 && novwec.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('wec');}

            if(dt.getMonth() == 11 && dezf1.includes(dt.getDate())){dayTable.classList.add('event'); eventos.classList.add('f1');}

        }
    }

    let now = new Date();
    var mes = now.getMonth();
    let ano = now.getFullYear();
    GetDaysCalendar(mes,ano);
    
    const botao_proximo = document.getElementById('btn-next');
    const botao_anterior = document.getElementById('btn-prev');

    botao_proximo.onclick = function(){
        mes++;
        if(mes > 11){
            mes = 0;
            ano++;
        }
        GetDaysCalendar(mes,ano);
    }
    botao_anterior.onclick = function(){
        mes--;
        if(mes < 0){
            mes = 11;
            ano--;
        }
        GetDaysCalendar(mes,ano);
    }
})



