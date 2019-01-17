{
    "username": "CodeBuildBot",
	"channel": "@test",
    "icon_emoji": ":ghost:",
	"attachments": [
        {
            "fallback": "Required plain-text summary of the attachment.",
            "color": "#36a64f",
            "title": "Name of Build",
            "text": "IN_PROGRESS",
            "fields": [
                {
                    "title": "Priority",
                    "value": "Low"
                }
            ],
            "image_url": "http://my-website.com/path/to/image.jpg",
            "thumb_url": "http://example.com/path/to/thumb.png",
            "footer": "AWS",
            "footer_icon": "https://platform.slack-edge.com/img/default_application_icon.png",
            "ts": 123456789
        }
    ]
}




if (buildStatus === "SUCCEEDED") {
				title = `<${projectUrl}|${project}> has finished building`;
				color = Slack.COLORS.ok;
			}
			else if (buildStatus === "STOPPED") {
				title = `<${projectUrl}|${project}> was stopped`;
				color = Slack.COLORS.warning;
			}
			else if (buildStatus === "FAILED") {
				title = `<${projectUrl}|${project}> has failed to build`;
				color = Slack.COLORS.critical;
			}
			else if (buildStatus === "IN_PROGRESS") {
				title = `<${projectUrl}|${project}> has started building`;
			}

			if (buildStatus) {
				fields.push({
					title: "Status",
					value: buildStatus,
					short: true
				});
			}

			fields.push({
				title: "Logs",
				value: `<${logsUrl}|View Logs>`,
				short: true
			});

			const slackMessage = {
				attachments: [{
					author_name: "Amazon CodeBuild",
					fallback: `${project} ${buildStatus}`,
					color: color,
					title: title,
					fields: fields,
					mrkdwn_in: [ "title", "text" ],
					ts: Slack.toEpochTime(time)
				}]
			};