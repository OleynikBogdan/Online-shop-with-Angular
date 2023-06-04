import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'TransformCreditCard' })
export class CreditPipe implements PipeTransform {
  transform(creditCard: string) {
    return creditCard.replace(/-\d{4}-\d{4}-/, '-****-****-');
  }
}
