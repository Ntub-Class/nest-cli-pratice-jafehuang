import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getAlluser() {
        return 'getAlluser';
     }

    @Get('/:id')
    getuser() {
        return 'getuser';
     }

    @Post()
    postuser() {
        return 'postuser';
     }

    @Put('/:id')
    putuser() {
        return 'putuser';
     }

    @Delete('/:id')
    deleteuser() {
        return 'deleteuser';
     }
}
