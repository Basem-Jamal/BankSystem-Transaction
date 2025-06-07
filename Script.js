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

    menuAction () {
        const closeTheWindow = document.getElementById("close");
        const btnDeposit     = document.getElementById("btnDeposit");
        const contentDp      = document.querySelector(".containerDeposit");
        const btnTransaction = document.getElementById("btnTransaction");
        const contentTr      = document.querySelector(".containerTransaction");
        const menu           = document.querySelector(".menu");

        closeTheWindow.style.display = "none";
        contentTr.style.display      = "none";
        contentDp.style.display      = "none";


        btnDeposit.addEventListener('click' , () => {
            closeTheWindow.style.display = "block";
            contentDp.style.display      = "block";
            contentTr.style.display      = "none";
            menu.style.display           = "none";

            closeTheWindow.addEventListener("click" , () => {
                closeTheWindow.style.display = "none";
                contentDp.style.display      = "none";
                contentTr.style.display      = "none";
                menu.style.display           = "block";

           });
            
        });

        btnTransaction.addEventListener('click' , () => {
                
            closeTheWindow.style.display = "block";
            contentTr.style.display      = "block";
            menu.style.display           = "none";

            closeTheWindow.addEventListener("click" , () => {
                closeTheWindow.style.display = "none";
                contentTr.style.display      = "none";
                menu.style.display           = "block";

           });
        });
        
    }

    depusit () {
        this.menuAction();

        const accountNumber = document.getElementById("accountNumber");
        const submit        = document.getElementById("submitAmount");


        // if (accountNumber.value == this.idFirstAccount) {
    
        // }

        accountNumber.addEventListener("input" , ()=> {
            
            if (this.idFirstAccount.value === accountNumber.value) {
                alert("ok");
                submit.addEventListener('click' , () => {

                    const amount   = document.getElementById("depositAmount");

                    let fromAmount = parseFloat(this.amountFirstAccount.value);
                    // let toAmount   = parseFloat(this.amountSecondAccount.value);
                     amount     = parseFloat(amount.value);
    
                    this.amountFirstAccount.value = (fromAmount + amount).toFixed(2);

                    

                 })
            }
        })

    }
    
    transAction () {


            this.menuAction();

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

         
            
                if (this.idFirstAccount.value === fromValue || this.idSecondAccount.value === toValue) {

                    if (fromAmount <= 0) {
                        alert("حبي الحساب صار صفر ريال! منين بدك نجيب مصاري");
                        
                        this.amountFirstAccount.value = parseFloat(fromAmount).toFixed(2);
                        return;
                    }

                    this.amountFirstAccount.value   =  (fromAmount - added).toFixed(2);
                    this.amountSecondAccount.value  =  (toAmount   + added).toFixed(2);
                }

                else if (this.idSecondAccount.value === fromValue || this.idFirstAccount.value === toValue) {
                    if (toAmount <= 0) {
                        alert("حبي الحساب صار صفر ريال! منين بدك نجيب مصاري");
                        
                        this.amountSecondAccount.value = parseFloat(toAmount).toFixed(2);
                        return;
                    }

                    this.amountSecondAccount.value   =  (toAmount   - added).toFixed(2);
                    this.amountFirstAccount.value    =  (fromAmount + added).toFixed(2);
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
trans.depusit();