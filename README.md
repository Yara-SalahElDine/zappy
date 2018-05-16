# zappy
 Zappy integrates with a Slack channel and listens on specific messages. For simplicity, we the tool will listen on all messages containing the word “go”. As soon as any member of the marketing team, places a messages on a channel containing the message “go”, the tool fetches twitter feeds from the FictionFone account and saves in a mongo collection. Lastly, for our demo purpose, you will create a view that fetches tweets from mongoDB and shows in a table.
 
1) create a Twitter and a Slack accounts.
2) create an appliction on Twitter and get config.consumer_key, config.consumer_secret, config.access_token_key config.access_token_secret, config.screen_name
3) create an application on Slack and configure an Outgoing WebHook: 
Trigger Words should be: z,x,c,v,b,n,m,a,s,d,f,g,h,j,k,l,q,w,e,r,t,y,u,i,o,p,1,2,3,4,5,6,7,8,9,0
URL: https:{{ngrokGeneratedURL}}/slack/events
get the config.token
4) rename "_configEx.js" to "_config.js" and fill the variables 
5) npm install
6) ng build
7) node server
 
