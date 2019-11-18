//simulando click com o JS no "link_1"

    public static function onInteracoes($parametro){
        //solução na função? onTabClick
        TScript::create("$('#link_1').click();");
        //TScript::create("javascript:serialform=($('#ticket_form').serialize()); __adianti_load_page('engine.php?class=TicketsList&method=onTabClick&current_page=1&static=1')");
    }
