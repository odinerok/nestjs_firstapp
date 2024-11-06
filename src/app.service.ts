import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {} {
    const ret = {message: 'Hello World!'};
    return (ret);
  }
}
