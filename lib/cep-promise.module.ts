import { Module } from '@nestjs/common';

import { CepPromiseService } from './cep-promise.service';

@Module({
	providers: [
		CepPromiseService,
	],
	exports: [CepPromiseService],
})
export class CepPromiseModule { }
