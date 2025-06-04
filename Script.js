class clsTransaction {
    constructor () {
        this.idFirstAccount     = document.getElementById("firstCurrentAccount");
        this.amountFirstAccount = document.getElementById("FromcurrentAmount")


        this.idSecondAccount    = document.getElementById("secondCurrentAccount");
        this.amountSecondAccount= document.getElementById("TocurrentAmount");


        this.selectFromAccount  = document.getElementById("selectFromAccount");
        this.selectToAccount    = document.getElementById("selectToAccount");


        this.addAmount          = document.getElementById("addAmount");
        this.sendTransaction    = document.getElementById("btn");
    }

    depusit () {
        
    }
    transAction () {
  
        this.selectFromAccount.addEventListener("input" , () => {
            const fromValue = this.selectFromAccount.value;
            const toValue   = this.selectToAccount.value;
            if(fromValue === toValue) {
                alert("مكرر!");
                this.selectFromAccount.value = "";
                return;
            }            
        });
        this.sendTransaction.addEventListener("click" , ()=> {
            const fromValue = this.selectFromAccount.value;
            const toValue   = this.selectToAccount.value;


            let fromAmount = parseFloat(this.amountFirstAccount.value);
            let toAmount   = parseFloat(this.amountSecondAccount.value);
            let added      = parseFloat(this.addAmount.value);

         
            
            if (this.idFirstAccount.value === fromValue || this.idFirstAccount.value === toValue) {

                this.amountFirstAccount.value   =  (fromAmount - added).toFixed(2);
                this.amountSecondAccount.value  =  (toAmount   + added).toFixed(2);
            }
        });

        this.selectToAccount.addEventListener("input" , () => {
            const fromValue = this.selectFromAccount.value;
            const toValue   = this.selectToAccount.value;

            if(toValue === fromValue ) {
                alert("مكرر!");
                this.selectToAccount.value = "";
                return;
            }
        });


    }
}

let trans = new clsTransaction();
trans.transAction();