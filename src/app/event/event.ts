import {PaymentMethod} from '../paymentmethod/paymentmethod';
import {Label} from '../label/label';

export class Event {
  id: number;
  name: string;
  amount: number;
  img: string;
  createAt: string;
  paymentMethod: PaymentMethod;
  label: Label;
}
