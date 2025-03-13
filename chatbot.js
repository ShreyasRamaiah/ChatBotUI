document.addEventListener("DOMContentLoaded", function(){

    const userInput = document.getElementById("userinput");
    const chatContainer = document.getElementById("chatcontainer");
    const sendBtn = document.getElementById("sendbtn");
    const chooseBtn = document.getElementById("choosebtn");
    const hideBtn = document.getElementById("hidebtn");
    const container = document.querySelector(".container");

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".pdf, .docx, .txt"; 
    fileInput.style.display = "none";
    document.body.appendChild(fileInput);

    chooseBtn.addEventListener("click", function () {
        fileInput.click();
    });

    fileInput.addEventListener("change", function () {
        
        alert("File selected: " + fileInput.files[0].name);
        }
    );

    function addMessage(text, sender){
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message");
        if(sender === "user")
        {
            messageDiv.classList.add("usermessage");
        }
        else{
            messageDiv.classList.add("botmessage");
        }
        messageDiv.textContent = text;
        chatContainer.appendChild(messageDiv);

        chatContainer.scrollTop = chatContainer.scrollHeight;

    }

    function sendMessage(){
        const userMessage = userInput.value;1
        addMessage(userMessage, "user");
        setTimeout(()=>{
            addMessage("Hi, how can I help you?", "bot");
        }, 600);
        userInput.value = "";
    }

    sendBtn.addEventListener("click", ()=>{
        sendMessage();
    })

    userInput.addEventListener("keypress", function(event){
        if(event.key === "Enter" && !event.shiftKey){
            event.preventDefault();
            sendMessage();
        }
    })

    let ishidden = true;
    hideBtn.addEventListener("click", function(){
        if(ishidden){
            container.classList.add("hidden");
            hideBtn.innerHTML = ">";
        }
        else{
            container.classList.remove("hidden");
            hideBtn.innerHTML = "<";
        }
        ishidden = !ishidden;
    });

   

});