// LOGIN FUNCTION
function login() {
    let u_id = document.getElementById("u_name").value;
    let u_pwd = document.getElementById("u_pwd").value;
    console.log(u_id, u_pwd);

    a = "211176"
    b = "345218"
    c = "117428"
    d = "245312"
    e = "122102"

    if (u_id == "1022" && u_pwd == "2022") {
        login_page.style.display = "none";
        user_page.style.display = "block";
        document.getElementById("show_bank_balance").innerHTML = a
        document.getElementById("owner_name").innerHTML = "Hello, Mr. Divyang"
    } else if (u_id == "3476" && u_pwd == "2023") {
        login_page.style.display = "none";
        user_page.style.display = "block";
        document.getElementById("show_bank_balance").innerHTML = b
        document.getElementById("owner_name").innerHTML = "Hello, Mr. Mayur"
    } else if (u_id == "9414" && u_pwd == "2024") {
        login_page.style.display = "none";
        user_page.style.display = "block";
        document.getElementById("show_bank_balance").innerHTML = c
        document.getElementById("owner_name").innerHTML = "Hello, Mr. Krishna"
    } else if (u_id == "4121" && u_pwd == "2025") {
        login_page.style.display = "none";
        user_page.style.display = "block";
        document.getElementById("show_bank_balance").innerHTML = d
        document.getElementById("owner_name").innerHTML = "Hello, Miss. Lisa"
    } else if (u_id == "1710" && u_pwd == "2026") {
        login_page.style.display = "none";
        user_page.style.display = "block";
        document.getElementById("show_bank_balance").innerHTML = e
        document.getElementById("owner_name").innerHTML = "Hello, Miss. Hiya"
    } else {
        alert("Please Enter Correct Account No. & Password");
    }
}

// CLEAR FUNCTION
function do_clear(){
    document.getElementById("u_name").value = ""
    document.getElementById("u_pwd").value = ""
}

// SHOW-HIDE PASSWORD
function show_pwd() {
    u_pwd.type = "text"
    eye1.style.display = "none"
    eye2.style.display = "block"
}
function hide_pwd() {
    u_pwd.type = "password"
    eye2.style.display = "none"
    eye1.style.display = "block"
}

// CARD-1 FUNCTIONS
function withdrow() {
    let default_amt = document.getElementById("show_bank_balance").innerHTML
    if(default_amt == 0){
        alert("You have ZERO balance, Kindly Deposite money first..!!")
    }else{
        user_page.style.display = "none";
        withdrow_data.style.display = "block";
    }
}
function deposite() {
    user_page.style.display = "none";
    deposite_data.style.display = "block";
}
function check_balance() {
    user_page.style.display = "none";
    check_balance_data.style.display = "block";
}

// CARD-2 FUNCTIONS
function main_exit() {
    user_page.style.display = "none";
    login_page.style.display = "block";
    u_name.value = ""
    u_pwd.value = ""
}
function withdrow_exit() {
    // let message = true
    let default_amt = parseInt(document.getElementById("show_bank_balance").innerHTML)
    let debit_amt = document.getElementById("debit_amt").value
    if(debit_amt <= 0){
        alert("Please, Enter valid amount..!!")
    }else if(debit_amt > default_amt){        
        // console.log(typeof(default_amt))
        // console.log(debit_amt)
        alert("Sorry, You don't have sufficiant balance..!!")
    }else if((debit_amt == default_amt) || ((default_amt - debit_amt) <= 2000)){
        if(default_amt > 2000){ 
            min_bal_alert.style.display = "block";
            // message = false
        }else{
            alert("You are under minimum balance, still you want to continue..!!")
            min_bal_alert.style.display = "block";
        }
    }else{
        let debited_amt = eval(default_amt + "-" + debit_amt)
        document.getElementById("show_bank_balance").innerHTML = debited_amt
        document.getElementById("debit_amt").value = ""
        
        withdrow_data.style.display = "none";
        deposite_data.style.display = "none";
        check_balance_data.style.display = "none";
        user_page.style.display = "block";
    }
}
function cencle_exit(){
    document.getElementById('debit_amt').value = ""
    min_bal_alert.style.display = "none";
}
function approve_exit(){
    let default_amt = document.getElementById("show_bank_balance").innerHTML
    let debit_amt = document.getElementById("debit_amt").value
    let debited_amt = eval(default_amt + "-" + debit_amt)
    document.getElementById("show_bank_balance").innerHTML = debited_amt
    document.getElementById("debit_amt").value = ""
    
    withdrow_data.style.display = "none";
    deposite_data.style.display = "none";
    check_balance_data.style.display = "none";
    min_bal_alert.style.display = "none";
    user_page.style.display = "block";

    console.log(default_amt)
    console.log(debit_amt)
    console.log(debited_amt)
}
function deposite_exit() {
    withdrow_data.style.display = "none";
    deposite_data.style.display = "none";
    check_balance_data.style.display = "none";
    user_page.style.display = "block";
    
    let default_amt = document.getElementById("show_bank_balance").innerHTML
    let credit_amt = document.getElementById("credit_amt").value
    let credited_amt = eval(default_amt + "+" + credit_amt)
    document.getElementById("show_bank_balance").innerHTML = credited_amt
    document.getElementById("credit_amt").value = ""
}
function check_balance_exit() {
    withdrow_data.style.display = "none";
    deposite_data.style.display = "none";
    check_balance_data.style.display = "none";
    user_page.style.display = "block";
}