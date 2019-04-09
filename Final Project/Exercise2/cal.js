
        var newdigit=true;
        var op;
        var temp;
        function Angka(angka){
            if(newdigit){
                newdigit=false;
            }else{
                angka=document.kalkulator.layar.value + angka;
            }
            document.kalkulator.layar.value=angka;

        }
        function Operator(opt){
            if(temp){
                Hitung();
            }
            
            temp=document.kalkulator.layar.value;
            op=opt;
            newdigit=true;
        }
        function Hitung(){
            var angka=document.kalkulator.layar.value;
            if (op=='*'){
                temp=temp*angka;
            }else if(op=='/'){
                temp=temp/angka;
            }else if(op=='+'){
                temp=parseInt(temp)+parseInt(angka);
            }else if(op=='-'){
                temp=temp-angka;
            }
            document.kalkulator.layar.value=temp;
            temp=0;
        }
        function Clear(){
            newdigit=true;
            document.kalkulator.layar.value='0';
            temp=0;
        }