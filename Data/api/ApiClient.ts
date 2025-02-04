import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {Either, left, right} from "@/Data/utils";

export abstract class ApiService {
	abstract get<T>(url: string): Promise<Either<Error, T>>;
	abstract post<T>(url: string, data: any): Promise<Either<Error, T>>;
	//abstract patch, delete...
}

export class ApiClient extends ApiService {
	private readonly axiosInstance: AxiosInstance;

	constructor(
		private _baseURL: string,
		// pass token here _tokenProvider <- class that implements logic for token storage .getToken  .setToken   etc
	) {
		super();
		this.axiosInstance = axios.create({
			baseURL: `${this._baseURL}`,
		});
		this._initializeInterceptors()
	}

	async get<T>(url: string, cfg?: AxiosRequestConfig): Promise<Either<Error, T>>  {
		try {
			return await this.axiosInstance.get<T>(url, cfg);
		} catch (e) {
			return e
		}
	}

	async post<T>(url: string, data: T): Promise<Either<Error, T>>  {
		try {
			return await this.axiosInstance.post<T>(url, data);
		} catch (e) {
			return e;
		}
	}

	private _handleError(error: any): Error {
		if (error.response) {
			return new Error(`HTTP Error: ${error.response.status} - ${error.response.statusText}`);
		} else if (error.request) {
			return new Error('No response received from the server');
		} else {
			return new Error(`Unexpected Error: ${error.message}`);
		}
	}

	private _initializeInterceptors() {
		this.axiosInstance.interceptors.request.use(
			(config) => {
				// here usually token
				// config.headers.Authorization = _tokenProvider.token ...
				return config;
			},
			(error) => Promise.reject(error),
		);

		this.axiosInstance.interceptors.response.use(
			(response) => {
				return Promise.resolve(right(response.data));
			},
			(error) => {
				return Promise.reject(left(this._handleError(error)));

			})
	}

}
