# zappy
 Zappy integrates with a Slack channel and listens on specific messages. For simplicity, we the tool will listen on all messages containing the word “go”. As soon as any member of the marketing team, places a messages on a channel containing the message “go”, the tool fetches twitter feeds from the FictionFone account and saves in a mongo collection. Lastly, for our demo purpose, you will create a view that fetches tweets from mongoDB and shows in a table.
 
1) create a Twitter and a Slack accounts.
2) create an appliction on Twitter and get config.consumer_key, config.consumer_secret, config.access_token_key config.access_token_secret, config.screen_name
3) create an application on Slack and configure an Outgoing WebHook then you should create a slack out going webhook and use this trigger : 
 `a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9,?,*,.`
 
@@ -21,12 +21,12 @@ in the url you can run `./ngrock http 8080` and copy paste the url like this
 
 raname `conf.json.example` to `conf.json` and put all the nessery keys there 
 
-###Runnung
+### Runnung
 1 `npm install`
 2 `npm run build`
 3 `npm start`
 
-###Notes:
+### Notes:
 
 this project requires a running mongo db demond 
 
0 comments on commit 6876db6
@Yara-SalahElDine
 
            
 
 

Leave a comment
Attach files by dragging & dropping, , or pasting from the clipboard.  Styling with Markdown is supported
  You’re not receiving notifications from this thread.
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About
Press h to open a hovercard with more details.
