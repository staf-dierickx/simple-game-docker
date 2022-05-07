var cron = require("node-cron");

var restartSheldule = cron.schedule("* * * * *", () => {
        console.log("stopped task");
    },
    {
        scheduled: false,
    }
);

