import { UNavigator } from "Browser";
import { numberCheck, UNavigator as UUNavigator } from "Util";

export interface localRecode {
	time: string;
	user: string;
	ua: string;
}

const BrowserMonitor = (ua: UNavigator) => {
	const number: numberCheck = 123;
	let utilNavigator: UUNavigator = { test: 1 };
	console.log(window.navigator);
};
