Codebuild Notifications to Slack
===
This cloudformation template allows the creation of a lambda function and it's permissions to create notifications status of defined codebuild runs to be sent to the default channel in codebuild.

===
Add the name of the Appilcation in the first field.

To add the Codebuild jobs that you would like tracked add the names of the codebuild jobs in CodebuildNames

`CodeBuildNames: test, test2, test3`

Add the Slack Incoming Webhook URL to the Incoming Webhook Parameter.
https://api.slack.com/incoming-webhooks

Optional: Can add a channel other than default. 

`Example: @test`
`Example: #test`

Otherwise it will post to the default channel specified in the Incoming Webhooks API.

When sucessful you will get a notification that looks like below.
![Slack_Notification](https://github.com/FrankKerschbaumer3/slackaws/blob/dev/images/Image.png)

Credit goes to https://hackernoon.com/monitor-your-aws-codebuilds-via-lambda-and-slack-ae2c621f68f1 for the basis of the code necessary 
for the lambda function.
