import type { App } from 'vue';
import icons from './register-icons';

function globalRegister(app: App) {
	app.use(icons);
}

export default globalRegister;
