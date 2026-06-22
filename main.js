  document.getElementById("importer").focus();

            document.getElementById("importer").addEventListener("keyup", e => {    
                document.getElementById("importer").value = document.getElementById("importer").value.toUpperCase();
            });

            document.getElementById("importer").addEventListener("keydown", (e) => {
                if(e.key === 'Enter') {
                    document.getElementById("fob").focus();
                }       
            });

            /************************************************VALUATION******************************************* */
            document.getElementById("fob").addEventListener("keyup", e => { getTotal(); hideDuties(); }); 
            document.getElementById("frt").addEventListener("keyup", e => { getTotal(); hideDuties(); });
            document.getElementById("ins").addEventListener("keyup", e => { getTotal(); hideDuties(); });
            document.getElementById("terms").addEventListener("change", e => { termsFN(); getTotal(); hideDuties(); });
            document.getElementById("currency").addEventListener("change", e => { termsFN(); getTotal(); hideDuties(); });
                 
            //*********************************SPECS************************************************* */
            document.getElementById("year").addEventListener("keyup", e => { year(); });
            document.getElementById("cc_s").addEventListener("keyup", e => { hideDuties(); });
            document.getElementById("seats").addEventListener("keyup", e => { hideDuties(); });
            document.getElementById("weight").addEventListener("keyup", e => { hideDuties(); });
            document.getElementById("hs").addEventListener("change", e => { calculateAll(); });

            /**********************************WAIVER********************************************************* */
            document.getElementById("waiver").addEventListener("change", e => { check_waiver(); });

            /* *******************prevent contextmenu *************************************************/
            document.addEventListener("contextmenu", (e) => { e.preventDefault(); });
       