
class clsWebSite  {
    getData () {
        this.currentName = document.getElementById('currentName');

        let user = JSON.parse(localStorage.getItem("currentUser"));
        
        if (user) {
            console.log('موجود')
            this.currentName.textContent = user.name;
        } else {
            this.currentName.textContent = "Guest";
                console.log('غير موجود')

        }
    }
}

const clsWeb = new clsWebSite();
clsWeb.getData();
