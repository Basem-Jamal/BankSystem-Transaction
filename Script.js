class clsTransaction {
    constructor () {
        this.idFirstAccount     = document.getElementById("firstCurrentAccount");
        this.amountFirstAccount = document.getElementById("FromcurrentAmount")


        this.idSecondAccount    = document.getElementById("secondCurrentAccount");
        this.amountSecondAccount= document.getElementById("TocurrentAmount");


        this.selectFromAccount  = document.getElementById("selectFromAccount");
        this.selectToAccount    = document.getElementById("selectToAccount");
    }


    transAction () {
        const firstAccount        = this.idFirstAccount.value;
        let SelectFirstAccount   = this.selectFromAccount.value;

        const secondAccount       = this.idSecondAccount.value;
        // let SelectSecondAccount = 
        

        this.selectToAccount.value = firstAccount;
    }
}

let trans = new clsTransaction();
trans.transAction();