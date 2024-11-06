import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Injectable()
export class CatsService {
    private cats : Cat[] = [];

    create(cat: Cat) {
        this.cats.push(cat);
    }

    findAll(): Cat[] {
        return this.cats;
    }

    remove(name: string) {
        const removedArray = this.cats.filter(function (letter) {
            return letter.name !== name;
        });

        this.cats = removedArray;
    }
}
