import { CEP } from "cep-promise";
const cepPromise = require('cep-promise');

export class CepPromiseService {
	async getCep(cep: string): Promise<CEP> {
		return cepPromise(cep).then((cep: CEP) => {
			return cep;
		}).catch((error) => {
			return error;
		})
	}
}
