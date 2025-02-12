import { Injectable } from '@nestjs/common';
import { db, Order } from 'src/db';

@Injectable()
export class OrdersService {
    public getAll(): Order[] {
        return db.orders;
    }
    public getById(id: Order['id']): Order | null {
        return db.orders.find((ord) => ord.id === id);
    }
    public deleteById(id: Order['id']): void {
        db.orders = db.orders.filter((ord) => ord.id !== id);
    }
}
