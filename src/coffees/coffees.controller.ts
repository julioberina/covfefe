import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    getCoffees(): string {
        return 'This action returns all coffees';
    }

    @Get('flavors')
    getFlavors(): string {
        return 'This action returns all coffee flavors';
    }
}
