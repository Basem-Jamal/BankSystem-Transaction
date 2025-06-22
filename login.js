class clsLogin{
    constructor() {

        this.containerLogin = document.querySelector(".container-SingUP");
        this.containerSignUp = document.querySelector(".container-SingUP");


        this.inputName = document.getElementById("sign-Name");
        this.inputEmail = document.getElementById("sign-Email");
        this.inputPassword = document.getElementById("sign-Password");

        
    }


    newUsers ()
    {
        this.user = { 
            name: this.inputName.value,
            email: this.inputEmail.value,
            password: this.inputPassword.value
        }

        
    }

    save () {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        let isExist = users.some(user => user.email=== this.user.email);

        if (isExist){
            alert("This email is already registered.");
            return;
        }
        users.push(this.user);
        localStorage.setItem("users", JSON.stringify(users));

        this.addUserToTable(this.user)
    }
    
    handel () {
        document.getElementById('btnSingup').addEventListener('click', (e)=>{
        e.preventDefault(); 
        this.newUsers();
        this.save();   
        })
    }

    showDataByTable (){
        this.tableBody = document.getElementById('table-Body');

        this.tableBody.innerHTML = "";

        let users = JSON.parse(localStorage.getItem("users")) || [];
        
        users.forEach(user => {
            let row = document.createElement("tr");

            row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            `;

            this.tableBody.appendChild(row);
        });
    }

    addUserToTable(user) {
        let row = document.createElement("tr");
    
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
        `;
    
        this.tableBody.appendChild(row);
    }
    

}

const app = new clsLogin();

app.handel()
app.showDataByTable();