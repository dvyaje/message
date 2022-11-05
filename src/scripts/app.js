let msg_box = document.getElementById("msg").value;
let btn = document.getElementById("send");
let x = document.getElementById("alert-notif");
let webhookURL = "https://discord.com/api/webhooks/1038116812992286750/j6q5BUe18IzyumLmG6h0mXgfEGZnFh3sZxwguugjb3c52QoXNBbTJthPASsXvfSyHMl5";
var date = new Date();

function sendMSG() {
  var y = document.forms['msg-form']['msg-input'].value;
  if (y == "") {
    x.style.display = "block";
    return false;
  } else {
    var request = new XMLHttpRequest();
    request.open("POST", webhookURL);
    request.setRequestHeader("Content-type", 'application/json');
    var embededNo = {
      author: {
        name: "💌 New Message Received!"
      },
      title: "Message :",
      description: `>>> "${y}"`,
      footer: {
        text: "yaje's messenger | "+date.toLocaleString()
      },
      color: hexToDecimal("#ff59c7"),
    }
    
    var params = {
      username: "Yaje's Messenger",
      avatar_url: "https://media.discordapp.net/attachments/1009299147335155743/1038137574482513920/d66744a03656033d902168de255660bb.jpg",
      embeds: [ embededNo ]
    }
    
    request.send(JSON.stringify(params));
  }
}

function hexToDecimal(hex) {
  return parseInt(hex.replace("#", ""), 16)
}
