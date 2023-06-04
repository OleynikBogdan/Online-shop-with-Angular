import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {IProduct} from './interface';

const mockData = [
  // tslint:disable-next-line:max-line-length
  {id : 1, name: 'NVIDIA GEFORCE RTX-3060ti', price: 10, description: 'The GeForce RTX 3060 Ti is a high-end graphics card by NVIDIA, launched on December 1st, 2020. Built on the 8 nm process, and based on the GA104 graphics processor, in its GA104-200-A1 variant, the card supports DirectX 12 Ultimate. This ensures that all modern games will run on GeForce RTX 3060 Ti.', quantity: 1},
  {id : 2, name: 'Процессор Intel Core i7-10700KF 3.8GHz/16MB (BX8070110700KF) s1200 BOX', price: 20, description: 'Новий процесор Intel Core i7-10700KF 10-го покоління з кодовою назвою мікроархітектури Comet Lake. Призначений для настільної платформи Intel LGA 1200. Належить до сімейства високопродуктивних процесорів Core i7.', quantity: 2},
  {id : 3, name: 'Процесор AMD Ryzen 5 5600X 3.7 GHz / 32 MB (100-100000065BOX) sAM4 BOX', price: 30, description: 'Найшвидший виграє\n' +
      'Цей найкращий у світі процесор для настільних ПК гарантує прекрасну продуктивність в іграх.\n' +
      '\n' +
      'Технологія AMD StoreMI\n' +
      'Простий і швидкий спосіб розширити сховище даних настільного ПК із процесором AMD Ryzen і прискорити його роботу.\n' +
      '\n' +
      'Програма AMD Ryzen Master\n' +
      'Проста і потужна програма для розгону процесорів AMD Ryzen.\n' +
      '\n' +
      'AMD Ryzen VR-Ready Premium\n' +
      'Для користувачів, які хочуть отримати максимум задоволення від використання технології віртуальної реальності, компанія AMD пропонує високопродуктивні процесори Ryzen VR-Ready Premium.', quantity: 1}];


@Injectable({providedIn: 'root'})
export class ProdService {
getProducts(): Observable<IProduct[]> {
  return of(mockData);
}
getProductByID(id: number): Observable<IProduct> {
  return of(mockData.find(product => product.id === id));
}
}
