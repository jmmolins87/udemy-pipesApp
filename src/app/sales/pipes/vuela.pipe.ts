import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'flight'
})
export class FlightPipe implements PipeTransform {

    transform( flight: boolean ): string {
        return flight ? 'Vuela' : 'No vuela';
    }

}