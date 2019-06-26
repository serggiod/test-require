let $thisAlertsHola = new Object();
    $thisAlertsHola.hola = ($this)=>{
        alert('Hola mundo');
	console.log($this);
    };

    define($thisAlertsHola);
