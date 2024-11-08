import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {} {
    const ret = {message: 'nestjsapi2'};
    return (ret);
  }
}
