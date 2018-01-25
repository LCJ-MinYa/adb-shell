import {
	exec
} from 'child_process';
import baseCommand from './config';

/**
 * [executeCommand 执行shell命令]
 * @param  {[string]}   command  [shell命令字符串]
 * @return {[Promise]}           [通知执行成功]
 */
function executeCommand(command) {
	console.log(command);
	return new Promise((resolve, reject) => {
		exec(command, (error, result) => {
			resolve(result);
		})
	})
}

/**
 * [passwordUnLock 安卓手机密码解锁]
 * @detail {[array]} baseCommand.passwordUnLock  [安卓密码坐标数组]
 */
async function passwordUnLock() {
	await executeCommand(baseCommand.input + 'keyevent 26');
	for (let i = 0; i < baseCommand.passwordUnLock.length; i++) {
		await executeCommand(baseCommand.tap + baseCommand.passwordUnLock[i]);
	}
}

export {
	passwordUnLock
}