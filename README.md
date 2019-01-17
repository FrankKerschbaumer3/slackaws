Codebuild Notifications to Slack
===
This cloudformation template allows the status of defined codebuild runs to be sent to the default channel in codebuild.

===
To add the codebuild jobs that you would like sent to slack add the names of the codebuild jobs as a comma list in the cloudformation parameter

Add the Slack webhook found by using the Incoming Webhook Parameter.

Optional: Can add a channel other than default. 

```
CloudWatchEvent1:
Type: CloudWatchEvent
          Properties:
            Pattern:
              detail-type:
                - CodeBuild Build State Change
              source:
                - aws.codebuild
              detail:
                *project-name:
                *  - testing
                build-status:
                  - IN_PROGRESS
                  - SUCCEEDED
                  - FAILED
```
When sucessful you will get a notification that looks like below.
![Slack_Notification](https://github.com/FrankKerschbaumer3/slackaws/blob/dev/images/Image.png)
