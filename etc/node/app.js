#!/usr/bin/env node

const fse = require("fs-extra");
const { spawn } = spawn('child_process');
const steamcmd = 

async function start() {
    const updateOnStart = process.env.UPDATE_ON_START;
    const preUpdateBackup = process.env.PRE_UPDATE_BACKUP;
    
    // backup dirs
    const srcDir = `/app/container`;
    const destDir = `/app/backup`;
    // update command
    const gameid = 105600;
    
    if (preUpdateBackup == true) {
        console.log('Creating backup...');
        copyFiles(srcDir, destDir);
    }
    
    if (updateOnStart == true) {

        // https://stackoverflow.com/questions/10232192/exec-display-stdout-live
        // https://nodejs.org/api/child_process.html#child_processspawncommand-args-options

        console.log('Updating game...');
        const steamcmd = spawn("steamcmd +login anonymous +force_install_dir"+ scrDir +"+app_update"+ gameid +"+quitgame");
        
    }
}

// copy over dir
async function copyFiles(srcDir, destDir) {
    try {
        await fse.copy(scrDir, destDir);
        console.log("Success!");
    } catch (err) {
        console.error(err);
    }
}

// execute command
async function execute(command) {
    var execCommand = exec(command);
    
    try {
        execCommand.stdout.on('data', function(data) {
            console.log(data); 
        });

    } catch (err) {
        console.error(err);
    }
}

console.log('starting');
start();