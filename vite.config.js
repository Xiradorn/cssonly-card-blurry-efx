import path from "path";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ command, mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

	return {
		server: {
			port: process.env.VITE_SERVER_PORT,
		},

		resolve: {
			alias: {
				"@img": path.resolve(__dirname, "./src/assets"),
			},
		},
	};
});
