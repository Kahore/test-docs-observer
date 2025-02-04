export class WebSocketClient {
	private socket: WebSocket | null = null;
	private eventListeners: Map<string, Set<(data: any) => void>> = new Map();

	constructor(private _url: string) {}

	connect(): void {
		if (this.socket) {
			console.warn("WebSocket is already connected.");
			return;
		}

		this.socket = new WebSocket(this._url);

		this.socket.onopen = () => this._emit("open", null);
		this.socket.onmessage = (event) => this._emit("message", event.data);
		this.socket.onerror = (event) => this._emit("error", event);
		this.socket.onclose = () => this._emit("close", null);
	}

	send(data: any): void {
		if (this.socket && this.socket.readyState === WebSocket.OPEN) {
			this.socket.send(JSON.stringify(data));
		} else {
			console.error("WebSocket is not connected.");
		}
	}

	close(): void {
		if (this.socket) {
			this.socket.close();
			this.socket = null;
		}
	}

	on(event: "open" | "message" | "error" | "close", callback: (data: any) => void): void {
		if (!this.eventListeners.has(event)) {
			this.eventListeners.set(event, new Set());
		}
		this.eventListeners.get(event)?.add(callback);
	}

	off(event: "open" | "message" | "error" | "close", callback: (data: any) => void): void {
		this.eventListeners.get(event)?.delete(callback);
	}

	private _emit(event: string, data: any): void {
		this.eventListeners.get(event)?.forEach((callback) => callback(data));
	}
}
