class clsLogin{
    constructor() {

        this.containerLogin = document.querySelector(".container-Login");
        this.containerSignUp = document.querySelector(".container-SingUP");


        this.inputName = document.getElementById("sign-Name");
        this.inputEmail = document.getElementById("sign-Email");
        this.inputPassword = document.getElementById("sign-Password");

         this.containerLogin.style.display = 'none';
        this.containerSignUp.style.display = 'none';

    }


    newUsers ()
    {
        this.user = { 
            name: this.inputName.value,
            email: this.inputEmail.value,
            password: this.inputPassword.value
        }

        
    }

    login () {
        
        const email = document.getElementById("login-Email").value;
        const password = document.getElementById("login-Password").value;

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let user = users.find(user => user.email=== email && user.password === password);

        if (!user) {
            alert("Wrong!!! Email or Password ");
            return;
        }
        
        localStorage.setItem("currentUser", JSON.stringify(user));


        alert('e');
        window.location.href = "/websiteBank/web.html";

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

        document.getElementById('btnLogin').addEventListener('click' , (e)=>{
            e.preventDefault();
            this.login();

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
    
    replaceBtn () {
        this.btnLogin = document.getElementById('login');
        this.btnSign = document.getElementById('sign');

        this.btnLogin.addEventListener('click' , (e) => {
            this.containerLogin.style.display = 'block';
            this.containerSignUp.style.display = 'none';
        })

        this.btnSign.addEventListener('click' , (e) => {
            this.containerLogin.style.display = 'none';
            this.containerSignUp.style.display= 'block';
        })

    }

}

const app = new clsLogin();

app.handel()
app.showDataByTable();
app.replaceBtn();