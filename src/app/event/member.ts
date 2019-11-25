import {PaymentMethod} from '../paymentmethod/paymentmethod';
import {Event} from './event';

export class Member {
  id: number;
  name: string;
  amount: number;
  paymentMethod: PaymentMethod;
  createAt: string;
  event: Event;
}
