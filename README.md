Codebuild Notifications to Slack
===
This cloudformation template allows the status of defined codebuild runs to be sent to the default channel in codebuild.
(Looking to add the ability to define the channel of your choosing)

===
To add the codebuild jobs that you would like sent to slack add the names of the codebuild jobs

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
