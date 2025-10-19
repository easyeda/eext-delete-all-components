

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function activate(status ?: 'onStartupFinished', arg ?: string) : void { }

export function about() : void {
	// 此处示例加载扩展 /iframe/ 目录下的 index.html 文件，窗口的高度和宽度均为 500px
	eda.sys_IFrame.openIFrame('/iframe/index.html', 500, 300);
}

export function debug() : void {
	// 此处示例加载扩展 /iframe/ 目录下的 index.html 文件，窗口的高度和宽度均为 500px
	eda.sys_IFrame.openIFrame('/iframe/debug.html', 500, 300);
}
